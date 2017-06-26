import React from "react";
import { graphql } from "react-apollo";
import currentUser from "../queries/currentUser.js";

class Header extends React.Component {
  render() {
    const { user, loading } = this.props.data;
    if (loading) {
      return <div />;
    } else if (!user) {
      return <div>logged out</div>;
    }
    return <div>logged in</div>;
  }
}

export default graphql(currentUser)(Header);
