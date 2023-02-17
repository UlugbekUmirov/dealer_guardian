import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";

import { Container } from "../styleComponents/HomeStyle";
import { UiTable } from "../styleComponents/UITable";

export default function Results() {
  const navigate = useNavigate();

  const { results } = useSelector((state) => state.main);
  useEffect(() => {
    if (results.length === 0) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Container>
        <div className="img">
          <img src="images/Rectangle 1.svg" alt="" />
        </div>
        <div className="body">
          <div className="get_approved">
            <div className="auto_loan_online_result">
              <img src="images/tick-circle.svg" alt="" />
              <span className="span">RESULTS ARE READY</span>
            </div>
            <div className="title">
              <span>Available lenders</span>
            </div>
            <span className="spann">
              Please, note that your results are based on the information you
              filled in the form
            </span>
            <div>
              <UiTable>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Rate</th>
                    <th>Term</th>
                    <th>Purchase power</th>
                  </tr>
                  {results && results.length !== 0
                    ? results.map(
                        ({
                          credit_bureau,
                          term_max,
                          term_min,
                          rate,
                          advance,
                          bank,
                        }) => (
                          <tr>
                            <td>{bank?.name}</td>
                            <td>{rate}%</td>
                            <td>
                              {term_min} - {term_max}
                            </td>
                            <td>{Number(advance) * 100}% of Retail value</td>
                            {console.log(advance, 9999)}
                          </tr>
                        )
                      )
                    : ""}
                </table>
              </UiTable>
            </div>
            <button className="get_button_result" onClick={() => navigate("/")}>
              GO TO MAIN
              <span></span>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
