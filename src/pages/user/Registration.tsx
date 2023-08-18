import { LinkType } from "../../data/link";
import HeroPages from "../../components/HeroPages";
import Footer from "../../components/shared/footer/Footer";
import RegistrationForm from "../../components/user/registration/RegistrationForm";

export default function Registration() {
  return (
    <>
      <HeroPages id={LinkType.REGISTRATION} />
      <RegistrationForm />
      <Footer />
    </>
  );
}
