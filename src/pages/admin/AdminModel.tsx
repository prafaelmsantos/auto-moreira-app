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
import { getData } from "../../services/AutoMoreiraService";
import { MessageType } from "../../models/enums/MessageTypeEnum";
import Footer from "../../components/shared/footer/Footer";
import { IModel } from "../../models/Model";

export default function AdminModel() {
  const [isLoading, setIsLoading] = useState(false);
  const [models, setModels] = useState<IModel[]>([]);
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
      field: "name",
      headerName: "Nome",
      width: 600,
    },
    {
      field: "markId",
      headerName: "Marca",
      width: 300,
    },
  ]);

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
        setStateModal({
          ...stateModal,
          openModal: true,
          responseTitle: "Erro!",
          responseContent:
            "Erro ao carregar os models. Por favor tente mais tarde...",
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
        id={LinkType.ADMIN_MODEL}
        title={navLink.find((x) => x.id === LinkType.ADMIN_MODEL)?.subTitle}
        titleUrl={navLink.find((x) => x.id === LinkType.ADMIN)?.url}
      />
      <Grid container direction="row" sx={{ px: 20, mb: 10 }}>
        <Grid item xs={3}>
          <AdminNavbar />
        </Grid>
        <Grid item xs={9} sx={{ px: 12, mt: 7 }}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
              <AgGridReact<IModel>
                rowData={models}
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
