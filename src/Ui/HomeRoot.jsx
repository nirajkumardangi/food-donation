import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
function HomeRoot() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default HomeRoot;
