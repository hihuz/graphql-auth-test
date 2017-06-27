import React from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import currentUser from "../queries/currentUser";

export default WrappedComponent => {
  class RequireAuth extends React.Component {
    componentWillUpdate(nextProps) {
      const { loading, user } = nextProps.data;
      console.log(loading, user);
      if (!loading && !user) {
        hashHistory.push("/login");
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUser)(RequireAuth);
};
