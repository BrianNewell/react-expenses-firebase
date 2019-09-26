import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, auth }) => {
  const userPhotoURL = !auth.userPhotoURL ? '/images/user.svg' : auth.userPhotoURL;
  const userName = !auth.userName ? 'Anonymous User' : auth.userName;

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow">
      <Link className="navbar-brand col" to="/dashboard">Expenses</Link>
      <ul className="navbar-nav mx-2">
        <li className="nav-item text-nowrap">
          <img src={userPhotoURL} alt={userName} title={userName} className="rounded-circle" height="32px" width="32px"></img>
        </li>
      </ul>
      <ul className="navbar-nav mx-2">
        <li className="nav-item text-nowrap">
          <button className="btn btn-primary" onClick={startLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            &nbsp;Sign out
        </button>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
