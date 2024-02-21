/** @format */

import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {BASE_API_URL} from "../../../config/variables";
import {IMark} from "../../../models/Mark";
import {IModel} from "../../../models/Model";
import {getData} from "../../../services/AutoMoreiraService";
import {useAppDispatch} from "../../../redux/hooks";
import {setLoader} from "../../../redux/loaderSlice";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {
  defaultFilters,
  FilterMode,
  ISelectedFilters,
  maxKms,
  maxPrice,
  maxYear,
  minKms,
  minPrice,
  minYear,
} from "../../../models/Filter";
import {
  Autocomplete,
  Button,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import {Fuel, FuelTypeConverted} from "../../../models/enums/FuelEnum";
import {deepOrange} from "@mui/material/colors";
import {clearFilters, setCurrentFilters} from "../../../config/localStorage";

type ISearchVehicle = {
  handleChange: (event: number | string | null | number[], id: string) => void;
  selectedFilters: ISelectedFilters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  filterMode: FilterMode;
  handleClear?: () => void;
  handleSubmit?: () => void;
};
export default function SearchVehicle({
  handleChange,
  selectedFilters,
  setSelectedFilters,
  filterMode,
  handleClear,
  handleSubmit,
}: ISearchVehicle) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState<IMark[]>([]);
  const [models, setModels] = useState<IModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getData<IMark[]>(`${BASE_API_URL}${"api/marks"}`)
      .then((data) => {
        setMarks(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getData<IModel[]>(`${BASE_API_URL}${"api/models"}`)
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    dispatch(setLoader(loading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const currentFilters = useSelector(
    (state: RootState) => state.filtersSlice.filters
  );

  useEffect(() => {
    currentFilters && setSelectedFilters(currentFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilters]);

  return (
    <section id="booking">
      <div className="mx-8 my-16 p-6 lg:p-12 lg:mx-28 bg-white bg-book-bg rounded shadow-white-box space-y-8">
        {filterMode === FilterMode.HOME && (
          <div>
            <h1 className="text-2xl font-bold">Encontrar veículo...</h1>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
          <div className="flex flex-col gap-4">
            <Autocomplete
              size="small"
              fullWidth
              onChange={(event, value) => {
                handleChange(value?.id ?? null, "markId");
                handleChange(null, "modelId");
              }}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={
                selectedFilters?.markId
                  ? marks.find((x) => x.id === selectedFilters.markId)
                  : null
              }
              id="tags-standard"
              options={marks}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  variant="outlined"
                  label={"Marca"}
                  placeholder={"Pesquisar"}
                />
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Autocomplete
              disabled={!selectedFilters?.markId}
              size="small"
              onChange={(event, value) =>
                handleChange(value?.id ?? null, "modelId")
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              value={
                selectedFilters?.modelId
                  ? models.find((x) => x.id === selectedFilters?.modelId)
                  : null
              }
              id="tags-standard"
              options={
                selectedFilters?.markId
                  ? models.filter((x) => x.markId === selectedFilters.markId)
                  : []
              }
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  label={"Modelo"}
                  placeholder={"Pesquisar"}
                />
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Autocomplete
              fullWidth
              onChange={(event, value) => handleChange(value, "fuelType")}
              size="small"
              isOptionEqualToValue={(option, value) => option === value}
              value={selectedFilters.fuelType}
              id="tags-standard"
              options={[Fuel.DIESEL, Fuel.PETROL, Fuel.HYBRID]}
              getOptionLabel={(option) => FuelTypeConverted(option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  variant="outlined"
                  label={"Combustível"}
                  placeholder={"Pesquisar"}
                />
              )}
            />
          </div>

          <div className="flex flex-col gap-4 px-2">
            <Typography id="track-false-slider" mb={-1.5} gutterBottom>
              Quilómetros
            </Typography>
            <Slider
              sx={{color: "#ff4d30"}}
              min={minKms}
              step={5000}
              max={maxKms}
              getAriaLabel={() => "Quilómetros"}
              value={[selectedFilters.minKms, selectedFilters.maxKms]}
              onChange={(event, value) => {
                handleChange((value as number[])[0], "minKms");
                handleChange((value as number[])[1], "maxKms");
              }}
              valueLabelDisplay="auto"
              size="small"
            />
          </div>

          <div className="flex flex-col gap-4 px-2">
            <Typography id="track-false-slider" mb={-1.5} gutterBottom>
              Ano
            </Typography>
            <Slider
              sx={{color: "#ff4d30"}}
              min={minYear}
              step={1}
              max={maxYear}
              getAriaLabel={() => "Ano"}
              value={[selectedFilters.minYear, selectedFilters.maxYear]}
              onChange={(event, value) => {
                handleChange((value as number[])[0], "minYear");
                handleChange((value as number[])[1], "maxYear");
              }}
              valueLabelDisplay="auto"
              size="small"
            />
          </div>

          <div className="flex flex-col gap-4 px-2">
            <Typography id="track-false-slider" mb={-1.5} gutterBottom>
              Preço
            </Typography>
            <Slider
              sx={{color: "#ff4d30"}}
              min={minPrice}
              step={500}
              max={maxPrice}
              getAriaLabel={() => "Preço"}
              value={[selectedFilters.minPrice, selectedFilters.maxPrice]}
              onChange={(event, value) => {
                handleChange((value as number[])[0], "minPrice");
                handleChange((value as number[])[1], "maxPrice");
              }}
              valueLabelDisplay="auto"
              size="small"
            />
          </div>
        </div>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          mt={8}
        >
          <Grid item lg={1.5} md={2} xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#010103",
                py: 1,
                border: "2px solid",
                borderColor: "black",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "black",
                  transition: "all 0.3s",
                },
              }}
              onClick={() => {
                setSelectedFilters(defaultFilters);
                clearFilters(dispatch);
                handleClear && handleClear();
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={12}
                fontFamily={"Rubik"}
                sx={{
                  mt: 0.5,
                }}
              >
                Limpar
              </Typography>
            </Button>
          </Grid>
          <Grid item lg={2} md={2.5} xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#ff4d30",
                py: 1,
                "&:hover": {
                  backgroundColor: deepOrange[900],
                },
              }}
              onClick={() => {
                filterMode === FilterMode.HOME && navigate("/vehicles");
                setCurrentFilters(selectedFilters, dispatch);
                handleSubmit && handleSubmit();
              }}
            >
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={14}
                fontFamily={"Rubik"}
                sx={{mt: 0.5}}
              >
                Encontar
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
