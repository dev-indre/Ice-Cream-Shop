import { useNavigate } from "react-router";
import Button from "../UI/Button";
import { FaArrowLeft } from "react-icons/fa";
import "./pages-styles/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <h3 className="error-ttitle">Sorry! The Page Not Found ;(</h3>
      <p className="error-description">
        Page You are trying to reach is not available at the moment.
      </p>
      <div className="back-button">
        <Button
          background="#f83d8e"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowLeft className="arrow-left" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
