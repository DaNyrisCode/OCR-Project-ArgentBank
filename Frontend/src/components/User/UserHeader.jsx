import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../../redux/slices/updateProfileSlice";
import { fetchUserProfile } from "../../redux/slices/profileSlice";

const UserHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const loading = useSelector((state) => state.profile.loading);
  const updatedUser = useSelector((state) => state.updateProfile.updatedUser);

  // État local pour afficher le formulaire
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(user?.userName || "");


  // Recharge le profil après la mise à jour
  useEffect(() => {
    if (updatedUser) {
      dispatch(fetchUserProfile());
      setIsEditing(false);
    }
  }, [updatedUser, dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Réinitialise l'utilisateur et annule la mise à jour
  const handleCancel = () => {
    setNewUserName(user?.userName || "");
    setIsEditing(false);
  };


  // Met à jour le userName
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserName.trim() !== "") {
      dispatch(updateUserName(newUserName));
    }
  };

  return (
    <div className="header">
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <>
          <h1>
            Welcome back<br />
            {user.firstName} {user.lastName}!
          </h1>
          <h2> AkA {user.userName}</h2>

          {isEditing ? (
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
                <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          )}
        </>
      ) : (
        <h1>Welcome back, User!</h1>
      )}
    </div>
  );
};

export default UserHeader;
