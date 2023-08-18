import { LinkType } from "../../../data/link";
import HeroPages from "../../HeroPages";
import Footer from "../../shared/footer/Footer";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <HeroPages id={LinkType.LOGIN} />
      <LoginForm />
      <Footer />
    </>
  );
}
