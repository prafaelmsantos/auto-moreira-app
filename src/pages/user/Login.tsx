import { LinkType } from "../../data/link";
import HeroPages from "../../components/HeroPages";
import Footer from "../../components/shared/footer/Footer";
import LoginForm from "../../components/user/login/LoginForm";

export default function Login() {
  return (
    <>
      <HeroPages id={LinkType.LOGIN} />
      <LoginForm />
      <Footer />
    </>
  );
}
