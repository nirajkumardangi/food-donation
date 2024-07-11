/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useFirebase } from "../utility/Storage";
import   ToastNotification from '../pages/ToastNotification'
import  Loader  from '../Ui/Loader'

const UserProfile = () => {
  const params = useParams();
  const firebase = useFirebase();

  console.log(params.id);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals", params.id],
    queryFn: firebase.getMealsByUserId(params.id),
  });
 
  let content= ''

  if(isError){
content=<ToastNotification type={'error'} content={error.message}/>
  }

  if(isPending){
    content=<Loader/>
  }
  if(data){
    console.log(data);
    content='data is now avwailable'
  }
  return <div>{content}</div>;
};

export default UserProfile;
