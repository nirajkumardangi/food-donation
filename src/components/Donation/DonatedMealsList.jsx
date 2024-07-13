import Cards from "../../Ui/Cards";
import { useQuery } from "@tanstack/react-query";
import { useFirebase } from "../../utility/Storage";
import Loader from "../../Ui/Loader";
import ErrorPage from "../../Ui/Error";

export default function CardDefault() {
  let content = "please wait ";

  const firebase = useFirebase();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals"],
    queryFn: firebase.getAllDonatedMeals,
  });

  if (isPending) {
    content = <Loader />;
  }
  if (isError) {
    content = <ErrorPage title={error.title} message={error.message} />;
  }

  if (data) {
    content = (
      <div className="container mx-auto p-4 mt-14">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.docs.map((meal, index) => (
            <li key={index} className="flex justify-center">
              <Cards id={meal.id} {...meal.data()} meals={meal} />
            </li>
          ))}
        </ul>
      </div>
    );

    return <>{content}</>;
  }
}
