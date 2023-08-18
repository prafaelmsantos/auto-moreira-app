import { Link } from "react-router-dom";
import { LinkType, navLink } from "../data/link";

export default function HeroPages(props: { id: LinkType; title?: string }) {
  const { id, title } = props;
  const page = navLink.find((x) => x.id === id);
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{page?.link}</h3>
            <p>
              <Link to="/">Início</Link> /
              {!title ? (
                page?.link
              ) : (
                <>
                  <Link to={page?.url ?? "/"}>{page?.link}</Link> / {title}
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
