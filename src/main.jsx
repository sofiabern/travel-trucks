import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./components/App/App";
import Loader from "./components/Loader/Loader";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<Loader/>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
