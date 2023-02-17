import { Route, Routes } from "react-router-dom";
import Approved from "../Approved/Approved";

import Home from "../Home";
import NotResultFound from "../NotResultFound/NotResultFound";
import Results from "../Results/Results";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="*" element={<NotFound />} /> */}
        <Route path="/approvet">
          <Route index element={<Approved />} />
        </Route>
        <Route path="/results">
          <Route index element={<Results />} />
        </Route>
        <Route path="/not-result-found">
          <Route index element={<NotResultFound />} />
        </Route>
      </Routes>
    </>
  );
};
export default Routers;
