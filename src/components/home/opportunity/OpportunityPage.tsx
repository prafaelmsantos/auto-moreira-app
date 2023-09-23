import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../../config/variables";
import { getData } from "../../../services/AutoMoreiraService";
import { IVehicle } from "../../../models/Vehicle";
import AutoMoreiraLoader from "../../shared/loader/AutoMoreiraLoader";
import OpportunityTitle from "./grid/OpportunityTitle";
import OpportunityContent from "./grid/OpportunityContent";

export default function OpportunityPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

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
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AutoMoreiraLoader open={isLoading} />

      <OpportunityTitle />

      <OpportunityContent vehicles={vehicles} />
    </>
  );
}
