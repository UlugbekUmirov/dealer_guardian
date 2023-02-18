import { useNavigate } from "react-router-dom/dist";
import { Container } from "./styleComponents/HomeStyle";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="img">
          <img src="images/Rectangle 1.png" alt="" />
        </div>
        <div className="body">
          <div className="get_approved">
            <div className="auto_loan_online">
              <img src="/images/steering-wheel 1.svg" alt="" />
              <span className="span">AUTO LOAN ONLINE</span>
            </div>
            <div className="title">
              <span>Take Control with Deal Guardian</span>
            </div>
            <span className="spann">
              Use all the available lenders in your area to maximize your
              purchase power
            </span>
            <button
              className="get_button"
              onClick={() => navigate("/approvet")}
            >
              <p className="get_button_p">GET APPROVED</p>
              <span>
                <img src="images/Line arrow-right.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
