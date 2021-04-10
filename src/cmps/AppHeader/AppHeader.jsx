import './AppHeader.scss';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';

class _AppHeader extends Component {
  state = {
    onlyWidth: window.innerWidth,
    hamburger: false,
    isOpen: false,
  };
  componentDidMount() {
    this.checkWidthWindows();
  }
  checkWidthWindows() {
    if (this.state.onlyWidth <= 414) {
      this.setState({ hamburger: true });
    }
  }
  openMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { user } = this.props;
    const { name, coins } = user;
    return (
      <div className="app-header">
        <h1 className="logo-header">Mister-Bitcoin</h1>
        {this.state.hamburger && (
          <div className="hamburger-svg" onClick={() => this.openMenu()}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          </div>
        )}
        {this.state.isOpen ||
          (this.state.onlyWidth >= 414 && (
            <div className={this.state.onlyWidth <= 414 ? 'mobileMenu' : 'list-links'}>
              <div>
                {name !== '' && (
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                )}
              </div>
              <div>
                {name !== '' && (
                  <NavLink to="/contact" activeClassName="active-nav" className="nav-link">
                    Contact
                  </NavLink>
                )}
              </div>
              <div>
                {name !== '' && (
                  <NavLink exact to="/chart" activeClassName="active-nav" className="nav-link">
                    Chart
                  </NavLink>
                )}
              </div>
              <div>
                <NavLink exact to="/singUp" activeClassName="active-nav" className="nav-link">
                  SingUp
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});
export const AppHeader = connect(mapStateToProps, null)(_AppHeader);
