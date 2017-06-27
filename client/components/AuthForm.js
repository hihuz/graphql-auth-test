import React from "react";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.updateInput = this.updateInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  updateInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="row">
        <form className="col s4">
          <div className="input-field">
            <input
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.updateInput}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Email"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.updateInput}
            />
          </div>
          <ul className="errors">
            {this.props.errors.map(err => <li key={err}>{err}</li>)}
          </ul>
          <button className="btn" onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
