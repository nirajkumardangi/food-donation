import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const ToastNotification = ({ type, content }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const toast = document.getElementById("toast-success");
      if (toast) {
        toast.remove();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="toast-success"
      className="flex items-center justify-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-900 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
      role="alert"
    >
      <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200`}>
        <FontAwesomeIcon
          icon={
            (type === "success" && faCheckCircle) ||
            (type === "error" && faExclamationCircle) ||
            (type === "warning" && faExclamationTriangle)
          }
          className="w-5 h-5"
        />
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{content}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <FontAwesomeIcon icon={faTimes} className="w-3 h-3" />
      </button>
    </div>
  );
};

export default ToastNotification;
