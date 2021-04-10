import './App.scss';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { Chart } from './pages/Chart';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage';
import { SingUp } from './pages/SingUp';
import { AppHeader } from './cmps/AppHeader';
import { connect } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { loginFromStorage } from './store/actions/userActions';
import { storageService } from './services/storageService';

function App({ user, loginFromStorage }) {
  const history = useHistory();
  const checkLocalStorage = () => {
    const storageUser = storageService.load('users');
    if (storageUser) {
      loginFromStorage(storageUser);
      return true;
    }
    return false;
  };
  if (user.name === '' || user.coins === null) {
    if (!checkLocalStorage()) {
      history.push('/singUp');
    }
  }
  return (
    <div className="App">
      <div className="app-container">
        <AppHeader />
        <Switch>
          <Route component={ContactDetailsPage} path="/details/:id?" />
          <Route component={ContactEditPage} path="/edit/:id?" />
          <Route component={ContactPage} path="/contact" />
          <Route component={SingUp} path="/singUp" />
          <Route component={Chart} path="/chart" />
          <Route component={HomePage} path="/" />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = {
  loginFromStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
