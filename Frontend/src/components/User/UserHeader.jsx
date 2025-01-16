import { useSelector } from "react-redux";

const UserHeader = () => {
  const user = useSelector((state) => state.profile.user); // On récupère depuis profile
  const loading = useSelector((state) => state.profile.loading);

  return (
    <div className="header">
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <h1>
          Welcome back<br />
          {user.firstName} {user.lastName}!
        </h1>
      ) : (
        <h1>Welcome back, User!</h1>
      )}
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default UserHeader;
