import React from "react";
import { graphql } from "react-apollo";
import currentUser from "../queries/currentUser.js";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
  }
  renderButtons() {
    const { user, loading } = this.props.data;
    if (loading) {
      return <div />;
    }
    if (!user) {
      return <div>signup / login</div>;
    }
    return <div>logout</div>;
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderButtons()}
        </div>
      </nav>
    );
  }
}

export default graphql(currentUser)(Header);
