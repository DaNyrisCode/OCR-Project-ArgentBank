/* eslint-disable react/prop-types */

//! FORMULAIRE DE MODIFICATION DE PSEUDO
const EditProfileUser = ({ user, newUserName, setNewUserName, handleSubmit, handleCancel }) => {
  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="input-wrapper">
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" value={user.firstName} readOnly />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" value={user.lastName} readOnly />
      </div>
      <div className="button-group">
        <button type="submit" className="save-button">Save</button>
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfileUser;
