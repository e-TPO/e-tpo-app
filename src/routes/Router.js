import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoadingScreen from '../screens/Loading';
import HomeScreen from '../screens/Home';
import NoticeScreen from '../screens/Notice';
import NotificationScreen from '../screens/Notification';
import SearchScreen from '../screens/Search';
import SettingsScreen from '../screens/Settings';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import PasswordRecovery from '../screens/auth/PasswordRecovery';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="loading" component={LoadingScreen} hideNavBar />
      <Scene key="home" component={HomeScreen} hideNavBar />
      <Scene key="notifications" component={NotificationScreen} title="Notifications" />
      <Scene key="search" component={SearchScreen} title="e-TPO search" />
      <Scene key="settings" component={SettingsScreen} title="Settings" />
      <Scene key="login" component={Login} hideNavBar />
      <Scene key="register" component={Register} hideNavBar />
      <Scene key="passwordRecovery" component={PasswordRecovery} hideNavBar />
      <Scene key="notice" component={NoticeScreen} title="Notice Board" />
    </Scene>
  </Router>
);

export default RouterComponent;
