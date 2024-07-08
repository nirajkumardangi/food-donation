import DonationForm from "../components/Donation/DonationForm";
import GoBackIcon from "../Ui/GoBackIcon";
import { Outlet } from "react-router-dom";


const DonationsPage = () => {
  return <div className="bg-gray-200">
  <GoBackIcon/>
  <Outlet/>
  </div>
};

export default DonationsPage;
