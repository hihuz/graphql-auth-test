import React from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import AuthForm from "./AuthForm";
import signup from "../mutations/signup";
import currentUser from "../queries/currentUser";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.signup = this.signup.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }

  signup({ email, password }) {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query: currentUser }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div className="container">
        <h3>Sign Up</h3>
        <AuthForm handleSubmit={this.signup} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(currentUser)(graphql(signup)(SignupForm));
