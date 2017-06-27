import React from "react";
import { graphql } from "react-apollo";
import AuthForm from "./AuthForm";
import login from "../mutations/login";
import currentUser from "../queries/currentUser";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query: currentUser }]
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <AuthForm login={this.login} />
      </div>
    );
  }
}

export default graphql(login)(LoginForm);
