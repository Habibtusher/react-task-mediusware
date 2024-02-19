import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import DetailModal from "./DetailModal";
import ToggleButton from "./ToggleButton";
import { Form } from 'react-bootstrap';

const AllContactsModal = ({ show, handleClose, setShowUSModal }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [evenChecked, setEvenChecked] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [data, setData] = useState({});


  const closeModal = () => {
    handleClose()

  };
  const modalB = () => {
    handleClose()
    setShowUSModal(true)
  };
  const fetchData = async () => {
    const apiUrl = `https://contact.mediusware.com/api/contacts/?search=${filter
      }&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  const handleCheck = (e) => {
    setEvenChecked(e.target.checked);
  };
  useEffect(() => {
    fetchData();
  }, [filter]);
  const handleViewDetail = (contact) => {
    setDetailModal(true);
    setData(contact);
  };

  if (detailModal) {
    return (
      <DetailModal
        show={detailModal}
        closeModal={() => setDetailModal(false)}
        data={data}
      />
    );
  }
  const filteredData = evenChecked ? contacts?.filter(item => item.id % 2 === 0) : contacts
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ToggleButton modalB={modalB} />

        <br />
        <Form>
          <Form.Control
            type="text"
            placeholder="Filter contacts"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </Form>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((contact, index) => {
              return (
                <tr key={index} onClick={() => handleViewDetail(contact)}>
                  <td>{contact.country.name}</td>
                  <td>{contact.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer
        className="d-flex justify-content-between align-items-center"

      >
        <div className="d-flex align-items-center">
          <Form.Check
            type="checkbox"
            id="checkbox"
            label="Only even"
            checked={evenChecked}
            onChange={handleCheck}
          />
        </div>

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

export default AllContactsModal;
