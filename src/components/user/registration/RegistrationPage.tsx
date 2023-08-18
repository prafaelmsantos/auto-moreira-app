import { LinkType } from "../../../data/link";
import HeroPages from "../../HeroPages";
import Footer from "../../shared/footer/Footer";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationPage() {
  return (
    <>
      <HeroPages id={LinkType.REGISTRATION} />
      <RegistrationForm />
      <Footer />
    </>
  );
}
