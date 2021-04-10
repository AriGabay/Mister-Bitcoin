import { Component } from 'react';
import './TransferFund.scss';
import { connect } from 'react-redux';
import { spendBalance, loginFromStorage } from '../../store/actions/userActions';
class _TransferFund extends Component {
  state = {
    transferInput: 0,
  };
  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ transferInput: value });
  };
  transferCoins = (ev) => {
    ev.preventDefault();
    this.props.spendBalance(this.state.transferInput, this.props.contact);
  };
  render() {
    const { contact, user } = this.props;
    return (
      <div className="transfer-fund">
        <h3>TransferFund</h3>
        <form onSubmit={(ev) => this.transferCoins(ev)}>
          <input
            type="number"
            className="input-transfer"
            min={1}
            max={user.coins}
            value={this.state.transferInput}
            onChange={this.handleChange}
          />
          <button className="btn">Transfer</button>
        </form>
        <div className="moves">
          <div className="moves-container">
            {user.moves &&
              user.moves.map((move, index) => {
                const matcher = new RegExp(contact.name, 'g');
                return matcher.test(move) ? (
                  <div className="move-Transfer" key={index}>
                    {move}
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  spendBalance,
  loginFromStorage,
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export const TransferFund = connect(mapStateToProps, mapDispatchToProps)(_TransferFund);
