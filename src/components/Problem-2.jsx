import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UsModal from "./UsModal";
import AllContactsModal from "./AllContactsModal";

const Problem2 = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const [showUSModal, setShowUSModal] = useState(false);
  const navigate = useNavigate();

  const openModalA = () => {
    setShowAllModal(true);
    // navigate("/modal-a"); 
  };

  const openModalB = () => {
    setShowUSModal(true);
    // navigate("/modal-b"); 
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => setShowAllModal(true)}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => setShowUSModal(true)}
          >
            US Contacts
          </button>
        </div>

        <UsModal show={showUSModal}
          handleClose={() => setShowUSModal(false)} setShowAllModal={setShowAllModal} />
        <AllContactsModal
          show={showAllModal}
          handleClose={() => setShowAllModal(false)}
          setShowUSModal={setShowUSModal}

        />
      </div>
    </div>
  );
};

export default Problem2;
