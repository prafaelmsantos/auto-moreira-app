import { Box, Grid } from "@mui/material";
import HeroPages from "../../components/HeroPages";
import { LinkType, navLink } from "../../data/link";
import AdminNavbar from "../../components/shared/navbar/admin/AdminNavbar";
import { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { ColDef } from "ag-grid-community";
import AutoMoreiraLoader from "../../components/shared/loader/AutoMoreiraLoader";
import AlertModal from "../../components/shared/modal/AlertModal";
import { BASE_API_URL } from "../../config/variables";
import { IVehicle } from "../../models/Vehicle";
import { getData } from "../../services/AutoMoreiraService";
import { MessageType } from "../../models/enums/MessageTypeEnum";
import { FuelTypeConverted } from "../../models/enums/FuelEnum";
import Footer from "../../components/shared/footer/Footer";

type GridParams = {
  data: IVehicle;
};

export default function AdminVehicle() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [stateModal, setStateModal] = useState({
    openModal: false,
    responseContent: "",
    responseTitle: "",
    type: MessageType.ERROR,
  });
  const { responseContent, responseTitle, openModal, type } = stateModal;

  const handleOkModal = () =>
    setStateModal({ ...stateModal, openModal: false });

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [columnDefs] = useState<ColDef[]>([
    { field: "id", headerName: "ID", maxWidth: 100 },
    {
      field: "mark",
      headerName: "Marca",
      valueGetter: (params: GridParams) => {
        return params.data.mark.name;
      },
    },
    {
      field: "model",
      headerName: "Modelo",
      valueGetter: (params: GridParams) => {
        return params.data.model.name;
      },
    },
    { field: "version", headerName: "Versão", filter: "agTextColumnFilter" },
    {
      field: "fuelType",
      headerName: "Combustível",
      maxWidth: 150,
      valueGetter: (params: GridParams) => {
        return FuelTypeConverted(params.data.fuelType);
      },
    },
    { field: "year", headerName: "Ano", maxWidth: 100 },
    {
      field: "price",
      headerName: "Preço",
      maxWidth: 100,
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/vehicles"}`;
    getData<IVehicle[]>(`${endpoint}`)
      .then((data) => {
        setVehicles(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
        setStateModal({
          ...stateModal,
          openModal: true,
          responseTitle: "Erro!",
          responseContent:
            "Erro ao carregar os veículos. Por favor tente mais tarde...",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true,
    };
  }, []);

  return (
    <Box>
      <AlertModal
        title={responseTitle}
        message={responseContent}
        isOpen={openModal}
        onOk={handleOkModal}
        type={type}
      />
      <AutoMoreiraLoader open={isLoading} />
      <HeroPages
        id={LinkType.ADMIN_VEHICLE}
        title={navLink.find((x) => x.id === LinkType.ADMIN_VEHICLE)?.subTitle}
        titleUrl={navLink.find((x) => x.id === LinkType.ADMIN)?.url}
      />
      <Grid container direction="row" sx={{ px: 20, mb: 10 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9} sx={{ px: 12, mt: 7 }}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
              <AgGridReact<IVehicle>
                rowData={vehicles}
                columnDefs={columnDefs}
                pagination
                paginationPageSize={10}
                defaultColDef={defaultColDef}
              />
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
