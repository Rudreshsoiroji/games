import { Link } from "react-router-dom";
import Genres from "../components/Genres";
import Platforms from "./Platforms";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Platforms />
      <Genres />
    </nav>
  );
};

export default Navigation;
