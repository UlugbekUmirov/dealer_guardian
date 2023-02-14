import { Route ,Routes} from "react-router-dom";
import Approved from "../Approved/Approved";

import Home from "../Home";
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
      </Routes>
    </>
  );
};
export default Routers