import React from 'react';
import {
  Font, AppLoading,
} from 'expo';
import {
  createStore, applyMiddleware,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/routes/Router';
import './ReactotronConfig';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount() {
    this._loadAssets()
      .then(() => this.setState({ loaded: true }));
  }

  async _loadAssets() {
    await Font.loadAsync({
      fontawesome: require('./src/assets/fonts/fontawesome.ttf'),
      icomoon: require('./src/assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./src/assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./src/assets/fonts/Roboto-Light.ttf'),
    });
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
