import Footer from "../components/shared/footer/Footer";
import HeroPages from "../components/HeroPages";
import { LinkType } from "../data/link";
import ContactPage from "../components/contact/ContactPage";

export default function Contact() {
  return (
    <>
      <HeroPages id={LinkType.CONTACT} />
      <ContactPage />
      <Footer />
    </>
  );
}
