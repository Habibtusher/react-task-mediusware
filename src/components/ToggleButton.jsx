import React from 'react';

const ToggleButton = ({ modalB, modalA }) => {
    return (
        <div>
            <button
                style={{
                    backgroundColor: "#46139f",
                    color: "white",
                    border: "none",
                    padding: "5px 6px",
                    marginRight: "10px",
                }}
                onClick={modalA}
            >
                All Contacts
            </button>
            <button
                style={{
                    backgroundColor: "#ff7f50",
                    color: "white",
                    border: "none",
                    padding: "5px 6px",
                }}
                onClick={modalB}
            >
                US Contacts
            </button>
        </div>
    );
};

export default ToggleButton;