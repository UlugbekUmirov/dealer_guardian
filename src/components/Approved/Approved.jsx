import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../styleComponents/HomeStyle";
import Axios from "../../utils/httpClient";
import get from "lodash";
import { useDispatch } from "react-redux";
export default function Approved() {
  const [tab, setTab] = useState(1);
  const [obj, setObj] = useState({});
  const [objE, setObjE] = useState({});
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextStep = () => {
    setTab(tab == 1 ? tab : tab - 1);
  };
  const previus = () => {
    setTab(tab == 3 ? tab : tab + 1);
  };

  const changeInput = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
    setObjE({ ...objE, [e.target.name]: false, common: false });
  };

  const handelResult = () => {
    let t = true,
      err = {};
    if (!obj?.fullname) {
      t = false;
      err = { ...err, fullname: true };
    }
    if (!obj?.zipcode) {
      t = false;
      err = { ...err, zipcode: true };
    }
    if (!obj?.income) {
      t = false;
      err = { ...err, income: true };
    }
    if (!obj?.equifax) {
      t = false;
      err = { ...err, equifax: true };
    }
    if (!obj?.experian) {
      t = false;
      err = { ...err, experian: true };
    }
    if (!obj?.transunion) {
      t = false;
      err = { ...err, transunion: true };
    }
    if (!obj?.caryear) {
      t = false;
      err = { ...err, caryear: true };
    }
    if (!obj?.downpayment) {
      t = false;
      err = { ...err, downpayment: true };
    }
    if (!obj?.equity) {
      t = false;
      err = { ...err, equity: true };
    }
    if (!obj?.term) {
      t = false;
      err = { ...err, term: true };
    }

    const formData = new FormData();
    formData.append("fullname", obj?.fullname);
    formData.append("zipcode", obj?.zipcode);
    formData.append("income", obj?.income);
    formData.append("equifax", obj?.equifax);
    formData.append("experian", obj?.experian);
    formData.append("transunion", obj?.transunion);
    formData.append("caryear", obj?.caryear);
    formData.append("downpayment", obj?.downpayment);
    formData.append("equity", obj?.equity);
    formData.append("term", obj?.term);

    if (t) {
      Axios()
        .post("/api/v1/info", formData)
        .then((res) => {
          navigate("/results");

          setList(res?.data?.dealers);
          dispatch({
            type: "RESULTS",
            payload: res?.data?.dealers,
          });
        })
        .catch(setObjE(err))
        .finally();
    } else {
      setObjE(err);
    }
  };
  return (
    <>
      <Container>
        <div className="img">
          <img src="images/Rectangle 1.svg" alt="" />
        </div>
        <div className="body">
          <div className="approved">
            <div className="steps">
              {[
                { id: 1, name: "Loan type" },
                { id: 2, name: "Credit scores" },
                { id: 3, name: "Additional info" },
              ].map((e) => (
                <div className={e.id === tab ? "active" : "step"}>
                  {e.id < tab ? (
                    <img src="/images/Frame 17 (1).svg" alt="" />
                  ) : (
                    <span>
                      <>{e.id}</>
                    </span>
                  )}
                  <p>{e.name}</p>
                  {e.id === 3 ? (
                    ""
                  ) : (
                    <div className="arrow">
                      <img src="/images/arrow-right.svg" alt="" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="steps_text">
              {tab == 1 ? (
                <>
                  <h4>What type of loan are you looking for?</h4>
                  <span>
                    Please, select the type of loan you are looking for
                  </span>
                  <div className="step_1-input">
                    <div className="car">
                      <img src="/images/car.svg" alt="" />
                      <p className="gg">Auto loan</p>
                    </div>
                    <img src="/images/tick-circle.svg" alt="" />
                  </div>
                </>
              ) : tab == 2 ? (
                <>
                  <h4>Input all the credit scores</h4>
                  <span>
                    We are in <b>beta</b> so use your best guess
                  </span>
                  <div className="inputs">
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Full name <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="fullname"
                          value={obj?.fullname || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.fullname ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Zip code <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="zipcode"
                          value={obj?.zipcode || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.zipcode ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                      <div className="input_target">
                        <label htmlFor="">
                          Monthly income <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="income"
                          value={obj?.income || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.income ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Equifax <span>*</span>
                        </label>
                        <input
                          name="equifax"
                          value={obj?.equifax || ""}
                          onChange={changeInput}
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                        />
                        <div className="errs">
                          {objE.equifax ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                      <div className="input_target">
                        <label htmlFor="">
                          Experian <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="experian"
                          value={obj?.experian || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.experian ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          TransUnion <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="transunion"
                          value={obj?.transunion || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.transunion ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4>Additional information</h4>
                  <span>There are only 3 inputs left to get the results!</span>
                  <div className="inputs">
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Vehicle year <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="caryear"
                          value={obj?.caryear || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.caryear ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Down payment <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="downpayment"
                          value={obj?.downpayment || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.downpayment ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Trade Equity <span>*</span>
                        </label>
                        <input
                          type="text"
                          name="equity"
                          value={obj?.equity || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.equity ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <label htmlFor="">
                          Term <span>*</span>
                        </label>
                        <input
                          type="number"
                          pattern="[0-9]*"
                          className="small-input"
                          name="term"
                          value={obj?.term || ""}
                          onChange={changeInput}
                        />
                        <div className="errs">
                          {objE.term ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="buttons">
              {tab == 1 ? (
                <Link to={"/"}>
                  <button className="previuos">previuos</button>
                </Link>
              ) : (
                <button className="previuos" onClick={nextStep}>
                  previuos
                </button>
              )}
              {tab == 3 ? (
                <button className="next" onClick={handelResult}>
                  gET RESULTS
                </button>
              ) : (
                <button className="next" onClick={previus}>
                  NEXT STEP
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
