import { Form, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFirebase } from "../context/FirebaseContext";
import ButtonLoader from "../components/ui/ButtonLoader";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function AuthForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentAuth] = useSearchParams();
  const navigate = useNavigate();
  const isLogin =
    currentAuth.get("mode") === "login" || !currentAuth.get("mode");
  const Firebase = useFirebase();

  useEffect(() => {
    if (Firebase.isLogin) {
      navigate("/dashboard");
    }
  }, [Firebase.isLogin, navigate]);

  const { mutate, isPending } = useMutation({
    mutationFn: isLogin ? Firebase.Login : Firebase.registration,
    onSuccess: () => {
      setEmail("");
      setPassword("");
      toast.success(
        `Welcome! ${isLogin ? "You have successfully signed in." : "Your account has been created."}`,
        {
          duration: 4000,
          icon: "🚀",
        }
      );
      navigate(isLogin ? "/dashboard" : "/auth?mode=login");
    },
    onError: (err) => {
      toast.error(
        `${err.title || (isLogin ? "Login Failed" : "Registration Failed")}: ${err.message}`,
        {
          duration: 5000,
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }
      );
    },
  });

  const { mutate: googleMutate, isPending: isGooglePending } = useMutation({
    mutationFn: Firebase.loginWithGoogle,
    onSuccess: () => {
      toast.success("Successfully logged in with Google!", {
        icon: "✨",
      });
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.title || "Google Sign In Failed", {
        description: err.message,
      });
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    mutate({ email, password });
  }

  function handleLoginWithGoogle() {
    googleMutate();
  }

  return (
    <div className="flex items-center justify-center min-h-[85vh] px-4 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl"
      >
        <h1 className="text-3xl font-display font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-secondary-color">
          {isLogin ? "Welcome Back" : "Join Feed Aid"}
        </h1>
        <Form method="post" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 ml-1"
            >
              Email Address
            </label>
            <div className="relative group">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-primary-color transition-colors"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full pl-12 pr-4 py-3.5 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color/50 focus:border-primary-color outline-none text-white placeholder-gray-500 transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 ml-1"
            >
              Password
            </label>
            <div className="relative group">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-primary-color transition-colors"
              />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full pl-12 pr-4 py-3.5 bg-dark-gray/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-color/50 focus:border-primary-color outline-none text-white placeholder-gray-500 transition-all"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isPending}
              className="group w-full bg-gradient-to-r from-primary-color to-secondary-color hover:shadow-[0_0_20px_rgba(247,79,34,0.3)] text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isPending ? (
                <ButtonLoader content={isLogin ? "Signing In..." : "Creating Account..."} />
              ) : (
                <>
                  <span>{isLogin ? "Sign In" : "Sign Up"}</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </>
              )}
            </button>
          </div>
        </Form>

        <div className="mt-8 flex items-center">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-widest font-semibold">
            Or continue with
          </span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={handleLoginWithGoogle}
            disabled={isGooglePending}
            className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold py-3.5 px-4 rounded-xl shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-3 border border-transparent focus:ring-2 focus:ring-white/50 outline-none"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-[#DB4437] text-lg" />
            <span>Google</span>
          </button>
        </div>

        <p className="mt-10 text-center text-gray-400 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            to={`?mode=${isLogin ? "signUp" : "login"}`}
            className="text-primary-color hover:text-secondary-color font-bold hover:underline transition-colors"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default AuthForm;
