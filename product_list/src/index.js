import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";

// store
import { store } from "store/store";
import { Provider } from "react-redux";

// style
import "static/style/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
