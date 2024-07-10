import GoBackIcon from "../Ui/GoBackIcon";
import { Outlet } from "react-router-dom";

const DonationsPage = () => {
  return (
    <div>
      <GoBackIcon />
      <Outlet />
    </div>
  );
};

export default DonationsPage;
