import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../../redux/slices/updateProfileSlice";
import { fetchUserProfile } from "../../redux/slices/profileSlice";
import EditProfileUser from "./EditProfileUser";

const UserHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const loading = useSelector((state) => state.profile.loading);
  const updatedUser = useSelector((state) => state.updateProfile.updatedUser);

  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    if (updatedUser) {
      dispatch(fetchUserProfile());
      setIsEditing(false);
    }
  }, [updatedUser, dispatch]);

  useEffect(() => {
    if (user) {
      setNewUserName(user?.userName);
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setNewUserName(user.userName);
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserName.trim() !== "") {
      dispatch(updateUserName(newUserName));
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
