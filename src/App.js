import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ContactName: "",
    ContactNumber: "",
    ContactAddress: "",
  });

  const [editFormData, setEditFormData] = useState({
    ContactName: "",
    ContactNumber: "",
    ContactAddress: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      ContactName: addFormData.ContactName,
      ContactNumber: addFormData.ContactNumber,
      ContactAddress: addFormData.ContactAddress,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      ContactName: editFormData.ContactName,
      ContactNumber: editFormData.ContactNumber,
      ContactAddress: editFormData.ContactAddress,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      ContactName: contact.ContactName,
      ContactNumber: contact.ContactNumber,
      ContactAddress: contact.ContactAddress,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Contact Name</th>
              <th>Contact Number</th>
              <th>Contact Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact Details</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="ContactName"
          className="form-control"
          required="required"
          placeholder="Enter Contact Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          className="form-control"
          name="address"
          required="required"
          placeholder="Enter Contact Number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          className="form-control"
          name="phoneNumber"
          required="required"
          placeholder="Enter Contact Address..."
          onChange={handleAddFormChange}
        />
        <button type="submit" className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default App;
