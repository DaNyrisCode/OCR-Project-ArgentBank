/* eslint-disable react/prop-types */
const Account = ({ title, transactions, amount, description }) => {
    return (
      <div className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">
            {title} <span className="transaction-count">(x{transactions})</span>
          </h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
    );
  };
  
  const Accounts = () => {
    return (
      <section className="accounts">
        <Account
          title="Argent Bank Checking"
          transactions={8349}
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings"
          transactions={6712}
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card"
          transactions={8349}
          amount="$184.30"
          description="Current Balance"
        />
      </section>
    );
  };
  
  export default Accounts;
  