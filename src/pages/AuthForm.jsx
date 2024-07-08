/**
 * The `AuthForm` function in JavaScript React handles user authentication, including login,
 * registration, and Google login, using tanStack for managing fetch requests and routing the user
 * based on their authentication status.
 */
import { Form, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import ErrorBlock from "../Ui/ErrorBlock";
import LoadingIndicator from "../Ui/LoadingIndicator";
import { useState, useEffect } from "react";
import { useFirebase } from "../utility/Storage";

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

  const { data, mutate, isError, error, isPending } = useMutation({
    mutationFn: isLogin ? Firebase.Login : Firebase.registration,
    onSuccess: () => {
      setEmail("");
      setPassword("");
      alert(isLogin ? "Login successful" : "Register successful");
      isLogin ? navigate("/") : navigate("/auth?mode=login");
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
      alert("You are successfully logged in with Google");
      navigate("/");
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
      <Form method="post" onSubmit={handleSubmit}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="enter user email"
            required
            onChange={handleEmailChange}
            value={email}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={handlePasswordChange}
            value={password}
          />
        </p>
        <div>
          <Link
            type="button"
            to={`?mode=${isLogin ? "signUp" : "login"}`}
            disabled={isPending}
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button type="submit">
            {isPending ? <LoadingIndicator /> : "Save"}
          </button>
          <button type="button" onClick={handleLoginWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </Form>

      <div>
        {isError ? (
          <ErrorBlock
            title={error.title}
            message={error.message || "Failed to register, please try again."}
          />
        ) : null}

        {googleIsError ? (
          <ErrorBlock
            title={googleError.title}
            message={
              googleError.message || "Failed to register, please try again."
            }
          />
        ) : null}
      </div>
    </>
  );
}

export default AuthForm;
