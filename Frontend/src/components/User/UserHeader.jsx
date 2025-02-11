//! ENTETE DE LA PAGE UTILISATEUR
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName, fetchUserProfile } from "../../redux/slices/profileSlice";
import EditProfileUser from "./EditProfileUser";

const UserHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const loading = useSelector((state) => state.profile.loading);

  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  // Met à jour le pseudo de l'utilisateur
  useEffect(() => {
    if (user) {
      setNewUserName(user.userName);
    }
  }, [user]);

  // Ferme le formulaire si le pseudo n'est pas modifié
  useEffect(() => {
    if (!loading && user?.userName === newUserName) {
      setIsEditing(false);
    }
  }, [user?.userName, newUserName, loading]);

  // Edition du pseudo
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Annulation de l'edition
  const handleCancel = () => {
    setNewUserName(user.userName);
    setIsEditing(false);
  };

  // Envoi du nouveau pseudo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserName.trim() !== "" && newUserName !== user.userName) {
      dispatch(updateUserName(newUserName)).then(() => {
        dispatch(fetchUserProfile());
      });
      setNewUserName("");
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

          {isEditing ? (
            <EditProfileUser
              user={user}
              newUserName={newUserName}
              setNewUserName={setNewUserName}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
            />
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          )}
        </>
      ) : (
        <h1>Welcome back, User!</h1>
      )}
    </div>
  );
};

export default UserHeader;
