import { Form, useSearchParams, Link, useNavigate } from "react-router-dom";
import { registration } from "../utility/Storage";
import { useMutation } from "@tanstack/react-query";
import ErrorBlock from "../Ui/ErrorBlock";
import LoadingIndicator from "../Ui/LoadingIndicator";
import { useState } from "react";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [currentAuth] = useSearchParams();
  const navigate = useNavigate();

  const isLogin = currentAuth.get("mode") === "login";

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: registration,
    onSuccess: () => {
      navigate("/auth?mode=login");
      setEmail("");
      setPassword("");
      alert("register successful");
    },
  });



  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    
    mutate(data);
  }

  function handleEmailChange(event) {
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
        </div>
      </Form>

      <div className="classes.errorCon">
        {isError ? (
          <ErrorBlock
            title={error.title}
            message={error.message || "Failed to register, please try again."}
          />
        ) : null}{" "}
      </div>
    </>
  );
}

export default AuthForm;
