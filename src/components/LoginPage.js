import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginAnon } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginAnon }) => (
    <div className="loginPage-layout">
        <div className="loginPage-box-layout shadow">
            <h3 className="my-2">Expenses</h3>
            <div className="mt-2 mb-4 font-weight-lighter">Because, your expenses count.</div>
            <button className="googleBtn" onClick={startLogin}>Sign In with <b>Google</b></button>

            <div className="mt-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-left-up"><polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path></svg>
                &nbsp;or&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-right-down"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg>
            </div>
            <div className="mt-3 mb-2 font-weight-bolder">Sign In as</div>
            <button className="btn btn-primary btn-lg font-weight-light" style={{ fontSize: '16px' }} onClick={startLoginAnon}>
                <img src="images/user.svg" alt="Anonymous icon" className="rounded-circle" height="22px" width="22px"></img>
                &nbsp;"Anonymous User"</button>
        </div>
    </div >
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginAnon: () => dispatch(startLoginAnon())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
