import Accounts from "../components/User/Account";
import UserHeader from "../components/User/UserHeader";

const User = () => {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Accounts />
    </main>
  );
};

export default User;
