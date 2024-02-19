import React from "react";
import Modal from "react-bootstrap/Modal";
const DetailModal = ({show, closeModal, data}) => {
  return (
    <Modal
      show={show}
      onHide={closeModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data?.country.name}</td>
              <td>{data?.phone}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "#46139f",
            color: "white",
            border: "none",
            padding: "5px 6px",
          }}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
