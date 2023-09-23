import { Link } from "react-router-dom";
import { LinkType, navLink } from "../data/link";
import { Box } from "@mui/material";

export default function HeroPages(props: {
  id: LinkType;
  title?: string;
  titleUrl?: string;
}) {
  const { id, title, titleUrl } = props;
  const page = navLink.find((x) => x.id === id);
  return (
    <Box className="hero-pages">
      <Box className="hero-pages__overlay"></Box>
      <Box className="container">
        <div className="hero-pages__text">
          <h3>{title ?? page?.title}</h3>
          <p>
            <Link to="/">Início</Link> {" / "}
            {!title ? (
              page?.title
            ) : (
              <>
                <Link to={titleUrl ?? page?.url ?? "/"}>{page?.title}</Link>{" "}
                {" / "}
                {title}
              </>
            )}
          </p>
        </div>
      </Box>
    </Box>
  );
}
