import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../styleComponents/HomeStyle";
import Axios from "../../utils/httpClient";
import InputMask from "react-input-mask";
import get from "lodash";
import { useDispatch } from "react-redux";
import { NumericFormat } from "react-number-format";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Approved() {
  const [tab, setTab] = useState(1);
  const [obj, setObj] = useState({
    caryear: "",
  });
  const [objE, setObjE] = useState({});
  const [list, setList] = useState([]);
  const [zipcodeE, setZipCodeE] = useState(false);
  const [equifaxE, setEquifaxE] = useState(false);
  const [experianE, setExperianE] = useState(false);
  const [fullNameE, setFullNameE] = useState(false);
  const [transunionE, setTransunionE] = useState(false);
  const [incomeE, setIncomeE] = useState(false);
  const [yearE, setYearE] = useState(false);
  const [err1, setErr1] = useState(false);
  const [paymentE, setPaymentE] = useState(false);
  const [equityE, setEqutyE] = useState(false);
  const [termE, setTermE] = useState(false);
  const [networkE, setnetworkE] = useState(false);
  const [phoneE, setPhoneE] = useState(false);
  const [gmailE, setGmaiE] = useState(false);
  //const [startDate, setStartDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const regexemail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const nextStep = () => {
    setTab(tab == 1 ? tab : tab - 1);
  };
  const previus = () => {
    setTab(2);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const previus2 = () => {
    if (
      !obj?.fullname ||
      get(obj?.zipcode, "zipcode", "").toString().length != 5 ||
      !obj?.income ||
      get(obj?.equifax, "equifax", "").toString().length != 3 ||
      get(obj?.experian, "experian", "").toString().length != 3 ||
      get(obj?.transunion, "transunion", "").toString().length != 3 ||
      get(obj?.phone, "phone", "").replace(/-/g, "").toString().length != 10 ||
      !isValidEmail(obj?.email)
    ) {
      setTab(2);
    } else {
      setTab(3);
    }

    if (obj?.zipcode?.length < 5 || obj?.zipcode == undefined) {
      setZipCodeE(true);
    } else {
      setZipCodeE(false);
    }
    if (!isValidEmail(obj?.email)) {
      setGmaiE(true);
    }
    if (
      get(obj?.phone, "phone", "").replace(/-/g, "").toString().length < 10 ||
      obj?.phone == undefined
    ) {
      setPhoneE(true);
    }
    if (
      obj?.experian?.length < 3 ||
      obj?.experian == undefined ||
      obj?.experian < 300 ||
      obj?.experian > 850
    ) {
      setExperianE(true);
    } else {
      setExperianE(false);
    }

    if (
      obj?.equifax?.length < 3 ||
      obj?.equifax == undefined ||
      obj?.equifax < 280 ||
      obj?.equifax > 850
    ) {
      setEquifaxE(true);
    } else {
      setEquifaxE(false);
    }

    if (
      obj?.transunion?.length < 3 ||
      obj?.transunion == undefined ||
      obj?.transunion < 300 ||
      obj?.transunion > 850
    ) {
      setTransunionE(true);
    } else {
      setTransunionE(false);
    }

    if (obj?.fullname == undefined || obj?.fullname == "") {
      setFullNameE(true);
    } else {
      setFullNameE(false);
    }

    if (obj?.income == undefined || obj?.income == "") {
      setIncomeE(true);
    } else {
      setIncomeE(false);
    }
    if (obj?.caryear == undefined) {
      setYearE(true);
    }
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
    if (!obj?.downpayment || obj?.downpayment < 4) {
      setPaymentE(true);
    }
    if (!obj?.equity) {
      setEqutyE(true);
    }
    if (!obj?.term) {
      setTermE(true);
    }

    const formData = new FormData();
    formData.append("fullname", obj?.fullname);
    formData.append("zipcode", obj?.zipcode);
    formData.append("income", obj?.income.replace(/,/g, ""));
    formData.append("equifax", obj?.equifax);
    formData.append("experian", obj?.experian);
    formData.append("transunion", obj?.transunion);
    formData.append("caryear", obj?.year1);
    formData.append("downpayment", obj?.downpayment.replace(/,/g, ""));
    formData.append("equity", obj?.equity.replace(/,/g, ""));
    formData.append("term", obj?.term);
    formData.append("phone", obj?.phone.replace(/-/g, ""));
    formData.append("email", obj?.email);

    if (
      t ||
      !obj?.year ||
      get(obj?.payment, "payment", "").toString().length != 5 ||
      !obj?.equity ||
      !obj?.term ||
      !obj?.caryear ||
      obj?.caryear != ""
    ) {
      Axios()
        .post("/api/v1/info", formData)
        .then((res) => {
          navigate("/results");
          if (res?.status == 500) {
            setnetworkE(true);
          }
          setList(res?.data?.dealers);
          dispatch({
            type: "RESULTS",
            payload: res?.data?.dealers,
          });
          console.log("res", res);
          dispatch({
            type: "TERM",
            payload: obj?.term,
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
          <img src="images/Rectangle 1.png" alt="" />
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
              ) : tab === 2 ? (
                <>
                  <h4>Input all the credit scores</h4>
                  <span>
                    We are in <b>beta</b> so use your best guess
                  </span>
                  <div className="inputs">
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Full name <span>*</span>
                          </label>
                          {fullNameE ? <label>Enter a full name</label> : ""}
                        </div>
                        <input
                          type="text"
                          name="fullname"
                          className={fullNameE ? "error" : "noterr"}
                          value={obj?.fullname || ""}
                          onChange={(e) => {
                            changeInput(e);
                            setFullNameE(false);
                          }}
                        />
                        <div className="errs">
                          {objE.fullname ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Zip code <span>*</span>
                          </label>
                          {zipcodeE ? (
                            <label htmlFor="">Enter a zip code</label>
                          ) : (
                            ""
                          )}
                        </div>
                        <InputMask
                          //maxLength={"5"}
                          formatChars={{ b: "[0-9]" }}
                          mask="bbbbb"
                          maskChar=""
                          pattern="[0-9]*"
                          name="zipcode"
                          className={zipcodeE ? "error" : "noterr"}
                          value={obj?.zipcode}
                          onChange={(e) => {
                            changeInput(e);
                            setZipCodeE(false);
                          }}
                        />

                        <div className="errs">
                          {objE.zipcode ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Monthly income <span>*</span>
                          </label>
                          {incomeE ? (
                            <label htmlFor="">Enter an income</label>
                          ) : (
                            ""
                          )}
                        </div>
                        <NumericFormat
                          value={obj?.income || ""}
                          allowLeadingZeros
                          thousandSeparator=","
                          className={incomeE ? "error" : "noterr"}
                          onChange={(e) => {
                            changeInput(e);
                            setIncomeE(false);
                          }}
                          name="income"
                        />

                        <div className="errs">
                          {objE.income ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Equifax <span>*</span>
                          </label>
                          {/*  {obj?.equifax < 280 || obj?.equifax > 500 ? (
                            <label htmlFor="">Enter a correct score</label>
                          ) : obj?.equifax == undefined ? (
                            <label htmlFor="">Enter a monthly income</label>
                          ) : (
                            ""
                          )}   */}
                          {equifaxE ? <label>Enter a correct score</label> : ""}
                        </div>
                        <InputMask
                          //  maxLength={"3"}
                          formatChars={{ b: "[0-9]" }}
                          mask="bbb"
                          maskChar=""
                          className={equifaxE ? "error" : ""}
                          pattern="[0-9]*"
                          name="equifax"
                          value={obj?.equifax || ""}
                          onChange={(e) => {
                            changeInput(e);
                            setEquifaxE(false);
                          }}
                        />
                        <div className="errs">
                          {objE.equifax ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Experian <span>*</span>
                          </label>
                          {experianE ? (
                            <label>Enter a correct score</label>
                          ) : (
                            ""
                          )}
                        </div>

                        <InputMask
                          // maxLength={"3"}
                          formatChars={{ b: "[0-9]" }}
                          mask="bbb"
                          className={experianE ? "error" : ""}
                          maskChar=""
                          pattern="[0-9]*"
                          name="experian"
                          value={obj?.experian}
                          onChange={(e) => {
                            changeInput(e);
                            setExperianE(false);
                          }}
                        />

                        <div className="errs">
                          {objE.experian ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            TransUnion <span>*</span>
                          </label>
                          {transunionE ? (
                            <label htmlFor="">Enter a correct score</label>
                          ) : (
                            ""
                          )}
                        </div>
                        <InputMask
                          //  maxLength={"3"}
                          formatChars={{ b: "[0-9]" }}
                          mask="bbb"
                          maskChar=""
                          className={transunionE ? "error" : ""}
                          pattern="[0-9]*"
                          name="transunion"
                          value={obj?.transunion}
                          onChange={(e) => {
                            changeInput(e);
                            setTransunionE(false);
                          }}
                        />
                        <div className="imgg">
                          <img src="/images/image 28.svg" alt="" />
                        </div>
                      </div>
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Phone Number <span>*</span>
                          </label>
                          {phoneE ? (
                            <label htmlFor="">Enter a correct score</label>
                          ) : (
                            ""
                          )}
                        </div>

                        <InputMask
                          formatChars={{ b: "[0-9]" }}
                          mask="bbb-bbb-bbbb"
                          maskChar=""
                          className={phoneE ? "error" : ""}
                          pattern="[0-9]*"
                          name="phone"
                          value={obj?.phone}
                          onChange={(e) => {
                            changeInput(e);
                            setPhoneE(false);
                          }}
                        />

                        {/* <div className="errs">
                          {objE.transunion ? <div>Требуется</div> : ""}
                        </div> */}
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        {/* <input
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />

                        {error && <h2 style={{ color: "red" }}>{error}</h2>} */}
                        <div className="labels">
                          <label htmlFor="">
                            E-mail <span>*</span>
                          </label>
                          {gmailE ? <label>Enter your e-mail</label> : ""}
                        </div>
                        <input
                          type="email"
                          name="email"
                          className={gmailE ? "error" : "noterr"}
                          value={obj?.email || ""}
                          // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                          // required
                          onChange={(e) => {
                            changeInput(e);
                            setGmaiE(false);
                          }}
                        />
                        <div className="errs">
                          {objE.fullname ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4>Additional information</h4>
                  <span>
                    There are only 3 inputs left to get the results!
                  </span>{" "}
                  <br />
                  <div className="inputs">
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Vehicle year <span>*</span>
                          </label>
                          {}
                        </div>
                        <InputMask
                          formatChars={{ b: "[0-9]" }}
                          mask="bbbb"
                          maskChar=""
                          name="year1"
                          value={obj?.year1 || ""}
                          onChange={(e) => {
                            changeInput(e);
                          }}
                        />
                        <DatePicker
                          selected={obj?.caryear}
                          onChange={(e) => {
                            setObj({
                              ...obj,
                              caryear: e,
                              year1: e.getFullYear(),
                            });
                          }}
                          placeholderText="Select Year"
                          showYearPicker
                          dateFormat="yyyy"
                          value={obj?.caryear || ""}
                          name="caryear"
                          className="dateeee"
                        />
                        <div className="imggg">
                          <img src="/images/calendar-2.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Down payment <span>*</span>
                          </label>
                          {paymentE ? <label>Enter a Down payment</label> : ""}
                        </div>
                        <NumericFormat
                          className={paymentE ? "error" : "noterr"}
                          name="downpayment"
                          value={obj?.downpayment || ""}
                          onChange={(e) => {
                            changeInput(e);
                            setPaymentE(false);
                          }}
                          allowLeadingZeros
                          thousandSeparator=","
                        />
                        <div className="errs">
                          {objE.downpayment ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Trade Equity <span>*</span>
                          </label>
                          {equityE ? <label>Enter a Trade Equity</label> : ""}
                        </div>
                        <NumericFormat
                          name="equity"
                          value={obj?.equity || ""}
                          onChange={(e) => {
                            changeInput(e);
                            setEqutyE(false);
                          }}
                          className={equityE ? "error" : "noterr"}
                          allowLeadingZeros
                          thousandSeparator=","
                        />

                        <div className="errs">
                          {objE.equity ? <div>Требуется</div> : ""}
                        </div>
                      </div>
                    </div>
                    <div className="create">
                      <div className="input_target">
                        <div className="labels">
                          <label htmlFor="">
                            Term <span>*</span>
                          </label>
                          {termE ? <label>Enter a Term</label> : ""}
                        </div>
                        <InputMask
                          formatChars={{ b: "[0-9]" }}
                          mask="bbb"
                          maskChar=""
                          // maxLength={"3"}
                          pattern="[0-9]*"
                          name="term"
                          className={termE ? "error" : "noterr"}
                          value={obj?.term || ""}
                          onChange={(e) => {
                            changeInput(e);
                            setTermE(false);
                          }}
                        />
                        <div className="errs">
                          {objE.term ? <div>Требуется</div> : ""}
                        </div>
                        {networkE && <h4>Network Error</h4>}
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
              {tab == 1 ? (
                <button className="next" onClick={previus}>
                  NEXT STEP
                </button>
              ) : tab === 2 ? (
                <button className={err1 ? "nextE" : "next"} onClick={previus2}>
                  NEXT STEP
                </button>
              ) : (
                <button className="next" onClick={handelResult}>
                  gET RESULTS
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
