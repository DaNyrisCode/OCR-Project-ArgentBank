//! PAGE UTILISATEUR
import Accounts from "../components/User/Account";
import UserHeader from "../components/User/UserHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/slices/profileSlice";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    // Vérifie si le token existe et si le profil utilisateur n'a pas encore été chargé
    if (token && !user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user]);

  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Accounts />
    </main>
  );
};

export default User;
