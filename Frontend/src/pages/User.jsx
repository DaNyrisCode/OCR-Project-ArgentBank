import Accounts from "../components/User/Account";
import UserHeader from "../components/User/UserHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/slices/profileSlice";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token]);

  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Accounts />
    </main>
  );
};

export default User;
