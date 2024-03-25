import "./index.css";
import store from "./store/configureStore";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-center"
          closeButton={true}
          autoClose={true}
          closeOnClick={false}
          newestOnTop={true}
          limit={1}
          className="toast-container"
        />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
   </React.StrictMode>
);
