import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';
import App from "./App";

const composedEnhancers = compose(applyMiddleware(thunk),composeWithDevTools())
const store = createStore(rootReducers,composedEnhancers)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
