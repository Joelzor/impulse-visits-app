import { useNavigate, useSearchParams } from "react-router-dom";

const Overlay = () => {
  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();

  const backToActivities = () => {
    // query being passed from addToPlans to Overlay component so we can navigate user back to the correct activities query page
    const query = searchParams.get("query");
    const params = new URLSearchParams({ query });
    navigate({ pathname: "/activities", search: params.toString() });
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h3>Plan successfully added!</h3>
        <div className="flex gap-10">
          <button className="btn confirm-btn" onClick={backToActivities}>
            Back to activities
          </button>
          <button className="btn plans-btn" onClick={() => navigate("/plans")}>
            See my plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
