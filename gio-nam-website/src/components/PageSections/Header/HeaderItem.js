import { Link } from "react-router-dom";
import "./HeaderItem.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HeaderItem({ item }) {
  return (
    <>
      {!item.contents || item.contents.length <= 0 ? (
        <div key={item.id} className={"page-button navigation-item"}>
          <Link to={item.href}>{item.title}</Link>
        </div>

      ) : (
        <div key={item.id} className={"dropdown"}>
          <div className={"dropdown-header page-button navigation-item"}>
            <Link to={item.href} className={"link-size"}>
              {item.title}
              <ExpandMoreIcon fontSize="small" className="icon-style"/>
            </Link>
          </div>

          <div className={"dropdown-content"}>
            {item.contents.map((content) => (
              <Link key={content.id} to={content.href}>
                {content.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
