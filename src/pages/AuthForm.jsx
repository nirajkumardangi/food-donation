/**
 * The `AuthForm` function in JavaScript React handles user authentication, including login,
 * registration, and Google login, using tanStack for managing fetch requests and routing the user
 * based on their authentication status.
 */
import { Form, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import ErrorBlock from "../Ui/ErrorBlock";
import LoadingIndicator from "../Ui/LoadingIndicator";
import { useState ,useEffect } from "react";
import { useFirebase } from "../utility/Storage";
import classes from "./AuthForm.module.css";

function AuthForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentAuth] = useSearchParams();
  const navigate = useNavigate();
  const isLogin = currentAuth.get("mode") === "login";
  const Firebase = useFirebase();


  useEffect(() => {                    // function is responsible for navigate the user on home page 
    if (Firebase.isLogin) {           //if user is login and  try to navigate  through  routeing path 
      navigate("/");
    }
  }, [Firebase, navigate]);
 




  const { data, mutate, isError, error, isPending } = useMutation({    //  useIng tanStack to mange the fetch request
                                                                        // for login and register request
    mutationFn: isLogin ? Firebase.Login : Firebase.registration,
    onSuccess: () => {
      setEmail("");
      setPassword("");
      alert(isLogin ? "Login successful" : "register successful");
      isLogin ? navigate("/") : navigate("/auth?mode=login");
    },
  });

   const {                                                            // for login request via google
     mutate: google_Mutate,
     isError: google_isError,
     error: google_error,
   } = useMutation({
     mutationKey: ["Login"],
     mutationFn: Firebase.loginWithGoogle,
     onSuccess: () => {
       alert("you are successfully login with google");
       navigate("/");
     },
   });



  function handleSubmit(event) {                    // collecting data from input field
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    mutate(data);                                  // calling request function for Login and register
  }

  function handle_Login_With_Google() {           // for login with google
    google_Mutate();
  }

  function handleEmailChange(event) {            //implementing two way binding 
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  

  return (
    <>
      <Form method="post" className={classes.form} onSubmit={handleSubmit}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
            value={email}
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            onChange={handlePasswordChange}
            value={password}
          />
        </p>
        <div className={classes.actions}>
          <Link
            type="button"
            to={`?mode=${isLogin ? "signUp" : "login"}`}
            disabled={isPending}
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button type="submit">
            {isPending ? <LoadingIndicator /> : "save"}
          </button>
          <button type="button" onClick={handle_Login_With_Google}>
            Signin with google
          </button>
        </div>
      </Form>

      <div className="classes.errorCon">
        {isError ? (
          <ErrorBlock
            title={error.title}
            message={error.message || "Failed to register, please try again."}
          />
        ) : null}

        {google_isError ? (
          <ErrorBlock
            title={google_error.title}
            message={
              google_error.message || "Failed to register, please try again."
            }
          />
        ) : null}
      </div>
    </>
  );
}

export default AuthForm;
