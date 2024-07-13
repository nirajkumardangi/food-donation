import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useFirebase } from "../utility/Storage";
import Loader from "../Ui/Loader";
import ErrorPage from "../Ui/Error";
import Cards from "../Ui/Cards";
const UserProfileCard = () => {
  const params = useParams();
  const firebase = useFirebase();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals"],
    queryFn: firebase.getMealsByUserId,
  });

  let content = "";

  if (isPending) {
    content = <Loader />;
  }
  if (isError) {
    content = <ErrorPage title={error.title} message={error.message} />;
  }

  if (data) {
    content = (
      <div className="container mx-auto mt-2">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.docs.map((meal, index) => (
            <li key={index} className="flex items-center justify-center">
              <Cards {...meal.data()} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <>{content}</>;
};

export default UserProfileCard;
