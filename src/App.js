import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createStore from "./utils/store";
import "./App.css";
import Routers from "./components/router/Routers";

function App() {
  const store = createStore();
  return (
    <>
    <Provider store={store}>


      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
