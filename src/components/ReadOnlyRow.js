import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, handleShow }) => {
  return (
    <tr>
      <td>{contact.ContactName}</td>
      <td>{contact.ContactNumber}</td>
      <td>{contact.ContactAddress}</td>
      <td>
        <button
          type="button"
          className="btn btn-warning"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button 
          type="button" 
          className="btn btn-danger"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
        <button 
          className="btn btn-primary"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
