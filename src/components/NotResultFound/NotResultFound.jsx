import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";

import { Container } from "../styleComponents/HomeStyle";
import { UiTable } from "../styleComponents/UITable";

export default function NotResultFound() {
  const navigate = useNavigate();

  const { results } = useSelector((state) => state.main);
  const { term } = useSelector((state) => state.main);

  return (
    <>
      <Container>
        <div className="img">
          <img src="images/Rectangle 1.svg" alt="" />
        </div>
        <div className="body">
          <div className="get_approved">
            <div className="auto_loan_online_result_not_found">
              <img src="images/info-circle.png" alt="" />
              <span className="span_not_found">NO RESULTS FOUND</span>
            </div>
            <div className="title">
              <span>No available lenders</span>
            </div>
            <span className="spann">
              Sorry, there are no lenders have been found. Please, try to search
              again.
            </span>
            <button className="get_button_ntf" onClick={() => navigate("/")}>
              TRY AGAIN
              <span></span>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
