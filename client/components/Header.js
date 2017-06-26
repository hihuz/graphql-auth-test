import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import currentUser from "../queries/currentUser";
import logout from "../mutations/logout";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderButtons = this.renderButtons.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.mutate({
      refetchQueries: [{ query: currentUser }]
    });
  }

  renderButtons() {
    const { user, loading } = this.props.data;
    if (loading) {
      return <div />;
    }
    if (!user) {
      return (
        <div>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </div>
      );
    }
    return <li><a onClick={this.handleLogout}>Logout</a></li>;
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logout)(graphql(currentUser)(Header));
