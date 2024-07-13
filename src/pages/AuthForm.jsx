import { Form, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import ErrorPage from "../Ui/Error";
import { useFirebase } from "../utility/Storage";
import ButtonLoader from "../Ui/Notification";
import ToastNotification from "./ToastNotification";

function AuthForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentAuth] = useSearchParams();
  const navigate = useNavigate();
  const isLogin = currentAuth.get("mode") === "login";
  const Firebase = useFirebase();

  useEffect(() => {
    if (Firebase.isLogin) {
      navigate("/");
    }
  }, [Firebase, navigate]);

  const loginSuccessWithEmail = <ToastNotification type="success" content="You are successfully logged in with Email"/>
  const loginErrorWithEmail = <ToastNotification type="error" content="Error! on login with Email"/>

  const { data, mutate, isError, error, isPending } = useMutation({
    mutationFn: isLogin ? Firebase.Login : Firebase.registration,
    onSuccess: () => {
      setEmail("");
      setPassword("");
      isLogin ? loginSuccessWithEmail : loginErrorWithEmail; 
      isLogin ? navigate("/dashboard") : navigate("/auth?mode=login");
    },
  });

  const {
    mutate: googleMutate,
    isError: googleIsError,
    error: googleError,
  } = useMutation({
    mutationKey: ["Login"],
    mutationFn: Firebase.loginWithGoogle,
    onSuccess: () => {
      <ToastNotification
        type="success"
        content="You are successfully logged in with Google"
      />;
      navigate("/dashboard");
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    mutate(data);
  }

  function handleLoginWithGoogle() {
    googleMutate();
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <Form
        method="post"
        onSubmit={handleSubmit}
        className="max-w-md mx-5 md:mx-auto p-6 bg-gray-900 shadow-md rounded-lg mt-32"
      >
        <h1 className="text-2xl font-light-bold mb-4 text-primary-color">
          {isLogin ? "Log in" : "Create a new user"}
        </h1>
        <div className="mb-4 relative">
          <label htmlFor="email" className="block text-gray-100 mb-2">
            Email
          </label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter user email"
              required
              onChange={handleEmailChange}
              value={email}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md "
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-100 mb-2">
            Password
          </label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
              value={password}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="inline">
            <Link
              to={`?mode=${isLogin ? "signUp" : "login"}`}
              disabled={isPending}
              className="text-primary-color hover:underline"
            >
              {isLogin ? "Create new user" : "Login"}
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            {isPending ? <ButtonLoader content="please wait..." /> : "Save"}
          </button>
          <button
            type="button"
            onClick={handleLoginWithGoogle}
            className="w-full bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </Form>

      <div className="mt-6">
        {isError && (
          <ErrorPage
            title={error.title}
            message={error.message || "Failed to register, please try again."}
          />
        )}

        {googleIsError && (
          <ErrorPage
            title={googleError.title}
            message={
              googleError.message || "Failed to register, please try again."
            }
          />
        )}
      </div>
    </>
  );
}

export default AuthForm;
