import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import AuthContextProvider
import{ AuthContextProvider} from "./context/AuthContext.jsx"
// import store
import { Provider } from "react-redux";
import store from "./App/Store.jsx";

//}

//remixicons
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  </StrictMode>
);
