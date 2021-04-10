import { Component } from 'react';
import { connect } from 'react-redux';
import bitcoinService from '../../services/bitcoinService.js';
import { storageService } from '../../services/storageService';
import { loginFromStorage } from '../../store/actions/userActions';

import './HomePage.scss';
class _HomePage extends Component {
  state = {
    rate: null,
  };
  async componentDidMount() {
    this.checkUserLogin();
    this.getRate();
  }
  componentWillUnmount() {}
  checkUserLogin() {
    if (this.props.user.name === '' || this.props.user.coins === null) {
      if (!this.checkLocalStorage()) {
        this.props.history.push('/singUp');
      }
    }
  }
  checkLocalStorage() {
    const user = storageService.load('users');
    if (user) {
      this.props.loginFromStorage(user);
      return true;
    }
    return false;
  }
  async getRate() {
    try {
      bitcoinService.getRate(this.props.user.coins).then((rate) => {
        this.setState({ rate });
      });
    } catch (error) {
      console.error('error:', error);
    }
  }
  render() {
    const { rate } = this.state;
    const { user } = this.props;
    return (
      <div className="home-page">
        {user.name !== '' && <h1 className="home-page-title">Hi, {user.name}</h1>}
        {user.coins !== null && <h4 className="home-page-coins">You have {user.coins} Coins</h4>}
        {rate && rate && <h4 className="home-page-rate">The rate of Bitcoin is : {rate}</h4>}
        <div className="moves">
          <div className="transfer-moves-container">
            {user.moves.length > 0 &&
              user.moves.map((move, index) => (
                <div className="move" key={index}>
                  {move}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  loginFromStorage,
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
