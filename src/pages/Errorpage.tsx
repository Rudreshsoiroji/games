import { Link } from "react-router-dom";
import PageNotFound from "../assets/404.jpg";
function Errorpage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={PageNotFound} alt="Page Not Found" />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}

export default Errorpage;
