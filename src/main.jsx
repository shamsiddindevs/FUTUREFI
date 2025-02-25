import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {I18nextProvider} from "react-i18next";
import i18n from "./18n.js";
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <App />
    <Toaster position="top-right" />
  </I18nextProvider>
);
