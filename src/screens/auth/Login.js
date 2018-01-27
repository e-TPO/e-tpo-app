import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import { FontAwesome } from '@expo/vector-icons';
import {
  rollNumberChanged,
  passwordChanged,
  loginRequest,
} from '../../actions';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';


const renderImage = () => {
  let image;
  const contentHeight = scaleModerate(375, 1);
  const height = Dimensions.get('window').height - contentHeight;
  const { width } = Dimensions.get('window');

  if (RkTheme.current.name === 'light') {
    image = (<Image
      style={[styles.image, { height, width }]}
      source={require('../../assets/images/backgroundLoginV1.png')}
    />);
  } else {
    image = (<Image
      style={[styles.image, { height, width }]}
      source={require('../../assets/images/backgroundLoginV1DarkTheme.png')}
    />);
  }
  return image;
};

class Login extends React.Component {
  onRollNumberChange(text) {
    this.props.rollNumberChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonPress() {
    const { rollNumber, password } = this.props;

    this.props.loginRequest({ rollNumber, password });
  }

  render() {
    const image = renderImage();

    return (
      <RkAvoidKeyboard
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
        style={styles.screen}
      >
        {image}
        <View style={styles.container}>
          <RkTextInput
            placeholder="Roll Number"
            rkType="stretch"
            onChangeText={this.onRollNumberChange.bind(this)}
          />
          <RkTextInput
            placeholder="Password"
            rkType="stretch"
            onChangeText={this.onPasswordChange.bind(this)}
            secureTextEntry
          />
          <RkButton
            style={styles.save}
            contentStyle={{ color: 'white' }}
            rkType="rounded large"
            onPress={this.onLoginButtonPress.bind(this)}
          >LOGIN
          </RkButton>
          <View style={styles.textRow}>
            <RkText rkType="primary3">Forgot password?</RkText>
            <RkButton
              rkType="clear"
              onPress={() => Actions.passwordRecovery()}
            >
              <RkText rkType="header6"> Recover
                  now
              </RkText>
            </RkButton>
          </View>
          <View style={styles.textRow}>
            <RkText rkType="primary3">Don’t have an account?</RkText>
            <RkButton
              rkType="clear"
              onPress={() => Actions.register()}
            >
              <RkText rkType="header6"> Sign up
                  now
              </RkText>
            </RkButton>
          </View>
          <View style={styles.textRow}>
            <RkButton
              rkType="clear"
              onPress={() => Actions.home({ type: 'reset' })}
            >
              <RkText rkType="header6"> Continue as guest
              </RkText>
            </RkButton>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    resizeMode: 'cover',
    marginBottom: scaleVertical(10),
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    alignItems: 'center',
    flex: -1,
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
  },
  button: {
    marginHorizontal: 14,
  },
  save: {
    marginVertical: 9,
    backgroundColor: 'red',
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
}));

const mapStateToProps = ({ auth }) => {
  const {
    rollNumber, password, error, fetching,
  } = auth;

  return {
    rollNumber, password, error, fetching,
  };
};

export default
connect(mapStateToProps, { rollNumberChanged, passwordChanged, loginRequest })(Login);
