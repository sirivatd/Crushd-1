import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../util/session_api_util";
import LoginForm from "./login_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: "login",
    navLink: <Link to="/signup">signup in instead</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(loginUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
