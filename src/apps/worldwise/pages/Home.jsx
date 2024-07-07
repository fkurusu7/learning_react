import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <div>
      <PageNav />
      <h1>World Wise</h1>

      <Link to={"/worldwise/app"}>Go to App</Link>
    </div>
  );
}

export default Home;
