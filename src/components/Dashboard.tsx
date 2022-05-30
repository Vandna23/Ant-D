import { OutlineButton } from "../style/Dashboard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <OutlineButton
          label="Next"
          variant="outline"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
