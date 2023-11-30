/** @format */

import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {IMark} from "../../../models/Mark";
import {IModel} from "../../../models/Model";
import {
  FilterMode,
  ISelectedFilters,
  defaultFilters,
  maxKms,
  maxPrice,
  maxYear,
  minKms,
  minPrice,
  minYear,
} from "../../../models/Filter";
import {Fuel, FuelTypeConverted} from "../../../models/enums/FuelEnum";
import {deepOrange} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {BASE_API_URL} from "../../../config/variables";
import {getData} from "../../../services/AutoMoreiraService";
import AutoMoreiraLoader from "../../shared/loader/AutoMoreiraLoader";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../redux/hooks";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {clearFilters, setCurrentFilters} from "../../../config/LocalStorage";

type ISearchVehicle = {
  handleChange: (event: number | string | null | number[], id: string) => void;
  selectedFilters: ISelectedFilters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<ISelectedFilters>>;
  filterMode: FilterMode;
};

export default function SearchVehicle(props: ISearchVehicle) {
  const {handleChange, selectedFilters, setSelectedFilters, filterMode} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [marks, setMarks] = useState<IMark[]>([]);
  const [models, setModels] = useState<IModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/marks"}`;
    getData<IMark[]>(`${endpoint}`)
      .then((data) => {
        setMarks(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/models"}`;
    getData<IModel[]>(`${endpoint}`)
      .then((data) => {
        setModels(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);

  const dispatch = useAppDispatch();

  const currentFilters = useSelector(
    (state: RootState) => state.filtersSlice.filters
  );

  useEffect(() => {
    currentFilters && setSelectedFilters(currentFilters);
  }, [currentFilters]);

  return (
    <Box className="book-section" id="booking-section">
      <AutoMoreiraLoader open={isLoading} />
      <Stack sx={{mx: 20}}>
        <Box className="book-content__box" sx={{borderRadius: "10px", mt: 5}}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item lg={3} xs={12}>
                <Autocomplete
                  fullWidth
                  onChange={(event, value) => {
                    handleChange(value?.id ?? null, "markId");
                    handleChange(null, "modelId");
                  }}
                  key={0}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
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
                      variant="outlined"
                      label={"Marca"}
                      placeholder={"Pesquisar"}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={3} xs={12}>
                <Autocomplete
                  fullWidth
                  onChange={(event, value) =>
                    handleChange(value?.id ?? null, "modelId")
                  }
                  key={0}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  value={
                    selectedFilters?.modelId
                      ? models.find((x) => x.id === selectedFilters?.modelId)
                      : null
                  }
                  id="tags-standard"
                  options={
                    selectedFilters?.markId
                      ? models.filter(
                          (x) => x.markId === selectedFilters.markId
                        )
                      : []
                  }
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label={"Modelo"}
                      placeholder={"Pesquisar"}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={3} xs={12}>
                <Autocomplete
                  fullWidth
                  onChange={(event, value) => handleChange(value, "fuelType")}
                  key={0}
                  isOptionEqualToValue={(option, value) => option === value}
                  value={selectedFilters.fuelType}
                  id="tags-standard"
                  options={[Fuel.DIESEL, Fuel.PETROL, Fuel.HYBRID]}
                  getOptionLabel={(option) => FuelTypeConverted(option)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label={"Combustível"}
                      placeholder={"Pesquisar"}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={9}
              mt={-4}
            >
              <Grid item lg={3.25} xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  mt={2}
                >
                  <Grid item xs={12}>
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
                      size="medium"
                    />
                  </Grid>
                  <Grid item>
                    <Typography id="track-false-slider" gutterBottom>
                      Quilómetros
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={2.25} xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  mt={2}
                >
                  <Grid item xs={12}>
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
                      size="medium"
                    />
                  </Grid>
                  <Grid item>
                    <Typography id="track-false-slider" gutterBottom>
                      Ano
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={3.25} xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  mt={2}
                >
                  <Grid item xs={12}>
                    <Slider
                      sx={{color: "#ff4d30"}}
                      min={minPrice}
                      step={500}
                      max={maxPrice}
                      getAriaLabel={() => "Preço"}
                      value={[
                        selectedFilters.minPrice,
                        selectedFilters.maxPrice,
                      ]}
                      onChange={(event, value) => {
                        handleChange((value as number[])[0], "minPrice");
                        handleChange((value as number[])[1], "maxPrice");
                      }}
                      valueLabelDisplay="auto"
                      size="medium"
                    />
                  </Grid>
                  <Grid item>
                    <Typography id="track-false-slider" gutterBottom>
                      Preço
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              mt={8}
            >
              <Grid item lg={1.5} xs={4}>
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
              <Grid item lg={2} xs={6}>
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
                    window.scrollTo(0, 0);
                    filterMode === FilterMode.HOME && navigate("/vehicles");
                    setCurrentFilters(selectedFilters, dispatch);
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
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
