import { Component } from 'react';
import { connect } from 'react-redux';
import { singUp } from '../../store/actions/userActions';
import './SingUp.scss';
import '../../scss/_helpers.scss';
class _SingUp extends Component {
  state = {
    userName: '',
  };
  componentDidMount() {}
  setUserName = (ev) => {
    ev.preventDefault();
    const userName = this.state.userName;
    this.props.singUp(userName);
    this.props.history.push('/');
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState(() => ({ userName: value }));
  };

  render() {
    return (
      <div>
        {
          <div className="userName-edit-container">
            <h1>SingUp</h1>
            <form
              className="from-userName"
              onSubmit={(ev) => {
                this.setUserName(ev);
              }}
            >
              <label htmlFor="userNameInput">User Name </label>
              <input
                type="text"
                name="name"
                id="userNameInput"
                className="input-basic"
                value={this.state.userName}
                onChange={this.handleChange}
              />
              <button className="btn">SingUp</button>
            </form>
            <button className="btn" onClick={() => this.props.history.push('/')}>
              Back
            </button>
          </div>
        }
      </div>
    );
  }
}
const mapDispatchToProps = {
  singUp,
};

export const SingUp = connect(null, mapDispatchToProps)(_SingUp);
