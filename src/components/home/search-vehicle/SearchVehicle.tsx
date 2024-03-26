/** @format */

import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {BASE_API_URL} from "../../../config/variables";
import {IMark} from "../../../models/Mark";
import {IModel} from "../../../models/Model";
import {getData} from "../../../services/AutoMoreiraService";
import {useAppDispatch} from "../../../redux/hooks";
import {setLoader} from "../../../redux/loaderSlice";
import {
  defaultFilters,
  FilterMode,
  ISelectedFilters,
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

  const param = useParams();

  const markIdParam = !isNaN(Number(param.markId))
    ? Number(param.markId)
    : null;
  const modelIdParam = !isNaN(Number(param.modelId))
    ? Number(param.modelId)
    : null;
  const fuelTypeParam = Object.values(Fuel).includes(param.fuelType as Fuel)
    ? (param.fuelType as Fuel)
    : null;

  const minYearParam = !isNaN(Number(param.minYear))
    ? Number(param.minYear)
    : defaultFilters.minYear;
  const maxYearParam = !isNaN(Number(param.maxYear))
    ? Number(param.maxYear)
    : defaultFilters.maxYear;
  const minPriceParam = !isNaN(Number(param.minPrice))
    ? Number(param.minPrice)
    : defaultFilters.minPrice;
  const maxPriceParam = !isNaN(Number(param.maxPrice))
    ? Number(param.maxPrice)
    : defaultFilters.maxPrice;
  const minKmsParam = !isNaN(Number(param.minKms))
    ? Number(param.minKms)
    : defaultFilters.minKms;
  const maxKmsParam = !isNaN(Number(param.maxKms))
    ? Number(param.maxKms)
    : defaultFilters.maxKms;

  useEffect(() => {
    setSelectedFilters({
      markId: markIdParam,
      modelId: modelIdParam,
      fuelType: fuelTypeParam,
      minYear: minYearParam,
      maxYear: maxYearParam,
      minPrice: minPriceParam,
      maxPrice: maxPriceParam,
      minKms: minKmsParam,
      maxKms: maxKmsParam,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    markIdParam,
    modelIdParam,
    fuelTypeParam,
    maxYearParam,
    minYearParam,
    minPriceParam,
    maxPriceParam,
    minKmsParam,
    maxKmsParam,
  ]);

  useEffect(() => {
    handleSubmit && void handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters]);

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
                filterMode === FilterMode.VEHICLES &&
                  navigate(
                    `/vehicles/${value?.id ?? null}/${null}/${
                      selectedFilters.fuelType
                    }/${selectedFilters.minYear}/${selectedFilters.maxYear}/${
                      selectedFilters.minPrice
                    }/${selectedFilters.maxPrice}/${selectedFilters.minKms}/${
                      selectedFilters.maxKms
                    }`
                  );
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
              onChange={(event, value) => {
                filterMode === FilterMode.VEHICLES &&
                  navigate(
                    `/vehicles/${selectedFilters.markId}/${value?.id ?? null}/${
                      selectedFilters.fuelType
                    }/${selectedFilters.minYear}/${selectedFilters.maxYear}/${
                      selectedFilters.minPrice
                    }/${selectedFilters.maxPrice}/${selectedFilters.minKms}/${
                      selectedFilters.maxKms
                    }`
                  );
                handleChange(value?.id ?? null, "modelId");
              }}
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
              onChange={(event, value) => {
                filterMode === FilterMode.VEHICLES &&
                  navigate(
                    `/vehicles/${selectedFilters.markId}/${selectedFilters.modelId}/${value}/${selectedFilters.minYear}/${selectedFilters.maxYear}/${selectedFilters.minPrice}/${selectedFilters.maxPrice}/${selectedFilters.minKms}/${selectedFilters.maxKms}`
                  );
                handleChange(value, "fuelType");
              }}
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
              min={defaultFilters.minKms}
              step={5000}
              max={defaultFilters.maxKms}
              getAriaLabel={() => "Quilómetros"}
              value={[selectedFilters.minKms, selectedFilters.maxKms]}
              onChange={(event, value) => {
                filterMode === FilterMode.VEHICLES &&
                  navigate(
                    `/vehicles/${selectedFilters.markId}/${
                      selectedFilters.modelId
                    }/${selectedFilters.fuelType}/${selectedFilters.minYear}/${
                      selectedFilters.maxYear
                    }/${selectedFilters.minPrice}/${selectedFilters.maxPrice}/${
                      (value as number[])[0]
                    }/${(value as number[])[1]}`
                  );
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
              min={defaultFilters.minYear}
              step={1}
              max={defaultFilters.maxYear}
              getAriaLabel={() => "Ano"}
              value={[selectedFilters.minYear, selectedFilters.maxYear]}
              onChange={(event, value) => {
                filterMode === FilterMode.VEHICLES &&
                  navigate(
                    `/vehicles/${selectedFilters.markId}/${
                      selectedFilters.modelId
                    }/${selectedFilters.fuelType}/${(value as number[])[0]}/${
                      (value as number[])[1]
                    }/${selectedFilters.minPrice}/${selectedFilters.maxPrice}/${
                      selectedFilters.minKms
                    }/${selectedFilters.maxKms}`
                  );
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
              min={defaultFilters.minPrice}
              step={500}
              max={defaultFilters.maxPrice}
              getAriaLabel={() => "Preço"}
              value={[selectedFilters.minPrice, selectedFilters.maxPrice]}
              onChange={(event, value) => {
                filterMode === FilterMode.VEHICLES &&
                  navigate(
                    `/vehicles/${selectedFilters.markId}/${
                      selectedFilters.modelId
                    }/${selectedFilters.fuelType}/${selectedFilters.minYear}/${
                      selectedFilters.maxYear
                    }/${(value as number[])[0]}/${(value as number[])[1]}/${
                      selectedFilters.minKms
                    }/${selectedFilters.maxKms}`
                  );
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
                navigate("/vehicles");
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
                navigate(
                  `/vehicles/${selectedFilters.markId}/${selectedFilters.modelId}/${selectedFilters.fuelType}/${selectedFilters.minYear}/${selectedFilters.maxYear}/${selectedFilters.minPrice}/${selectedFilters.maxPrice}/${selectedFilters.minKms}/${selectedFilters.maxKms}`
                );
                //setCurrentFilters(selectedFilters, dispatch);
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
