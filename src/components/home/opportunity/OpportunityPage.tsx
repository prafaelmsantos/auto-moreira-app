import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../../config/variables";
import { getData } from "../../../services/AutoMoreiraService";
import { IVehicle } from "../../../models/Vehicle";
import { MessageType } from "../../../models/enums/MessageTypeEnum";
import AlertModal from "../../shared/modal/AlertModal";
import AutoMoreiraLoader from "../../shared/loader/AutoMoreiraLoader";
import OpportunityTitle from "./grid/OpportunityTitle";
import OpportunityContent from "./grid/OpportunityContent";

export default function OpportunityPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  const [stateModal, setStateModal] = useState({
    openModal: false,
    responseContent: "",
    responseTitle: "",
    type: MessageType.ERROR,
  });
  const { responseContent, responseTitle, openModal, type } = stateModal;

  const handleOkModal = () => {
    setStateModal({ ...stateModal, openModal: false });
  };

  useEffect(() => {
    setIsLoading(true);
    const endpoint = `${BASE_API_URL}${"api/vehicles"}`;
    getData<IVehicle[]>(`${endpoint}`)
      .then((data) => {
        setVehicles(data.filter((x) => !x.opportunity));
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

  return (
    <>
      <AlertModal
        title={responseTitle}
        message={responseContent}
        isOpen={openModal}
        onOk={handleOkModal}
        onCancel={handleOkModal}
        type={type}
      />
      <AutoMoreiraLoader open={isLoading} />

      <OpportunityTitle />

      <OpportunityContent vehicles={vehicles} />
    </>
  );
}
