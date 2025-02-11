//! BARRE DE NAVIGATION
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, resetState } from '../redux/slices/authSlice';
import { resetProfile } from '../redux/slices/profileSlice';
import logo from "../img/argentBankLogo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.profile.user);

  // Déconnexion
  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetState());
    dispatch(resetProfile());
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
          width="200"
          height="50"
          loading="lazy"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          // Affiche le pseudo de l'utilisateur et le bouton deconnexion
          <>
            {user && (
              <span className="main-nav-user">
                <i className="fa fa-user-circle"></i> {user.userName}
              </span>
            )}
            <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
