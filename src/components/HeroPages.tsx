import { Link } from "react-router-dom";
import { LinkType, navLink } from "../data/link";

function HeroPages(props: { id: LinkType }) {
  const { id } = props;
  const page = navLink.find((x) => x.id === id);
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{page?.link}</h3>
            <p>
              <Link to="/">Início</Link> / {page?.link}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
