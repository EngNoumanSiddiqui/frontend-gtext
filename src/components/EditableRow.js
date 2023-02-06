import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Contact Name..."
          name="ContactName"
          value={editFormData.ContactName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Contact Number..."
          name="ContactNumber"
          value={editFormData.ContactNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Contact Address..."
          name="ContactAddress"
          value={editFormData.ContactAddress}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button 
        type="submit"
        className="btn btn-success"
        >
          Save
        </button>
        <button 
        type="button"
        className="btn btn-dark" 
        onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
