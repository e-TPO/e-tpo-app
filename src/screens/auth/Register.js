import React from 'react';
import {
  View,
  Image,
  Keyboard,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import {
  firstNameChanged,
  lastNameChanged,
  rollNumberChanged,
  emailChanged,
  passwordChanged,
  passwordConfirmChanged,
  registerRequest,
} from '../../actions';
import { scale, scaleModerate, scaleVertical } from '../../utils/scale';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onRollNumberChange(text) {
    this.props.rollNumberChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onPasswordConfirmChange(text) {
    this.props.passwordConfirmChanged(text);
  }

  render() {
    const renderIcon = () => {
      if (RkTheme.current.name === 'light') { return <Image style={styles.image} source={require('../../assets/images/logo.png')} />; }
      return <Image style={styles.image} source={require('../../assets/images/logoDark.png')} />;
    };
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={e => true}
        onResponderRelease={e => Keyboard.dismiss()}
      >
        <View style={{ alignItems: 'center' }}>
          {renderIcon()}
          <RkText rkType="h1">Registration</RkText>
        </View>
        <RkTextInput
          rkType="stretch"
          placeholder="First Name"
          onChangeText={this.onFirstNameChange.bind(this)}
        />
        <RkTextInput
          rkType="stretch"
          placeholder="Last Name"
          onChangeText={this.onLastNameChange.bind(this)}
        />
        <RkTextInput
          rkType="stretch"
          placeholder="Roll Number"
          onChangeText={this.onRollNumberChange.bind(this)}
        />
        <RkTextInput
          rkType="stretch"
          placeholder="Email"
          onChangeText={this.onEmailChange.bind(this)}
        />
        <RkTextInput
          rkType="stretch"
          placeholder="Password"
          onChangeText={this.onPasswordChange.bind(this)}
          secureTextEntry
        />
        <RkTextInput
          rkType="stretch"
          placeholder="Password Confirm"
          onChangeText={this.onPasswordConfirmChange.bind(this)}
          secureTextEntry
        />
        <RkButton
          style={styles.save}
          rkType="large rounded"
          onPress={() => {
           const { firstName, lastName, rollNumber, email, password, passwordConfirm } = this.props;
            this.props.registerRequest({
              firstName, lastName, rollNumber, email, password, passwordConfirm,
            });
            console.log(this.state);
          }
        }
        >SIGN UP
        </RkButton>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType="primary3">Already have an account?</RkText>
            <RkButton rkType="clear">
              <RkText rkType="header6"> Sign in now </RkText>
            </RkButton>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(77),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'space-between',
  },
  save: {
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 24,
    justifyContent: 'space-around',
  },
  footer: {
    justifyContent: 'flex-end',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const mapStateToProps = ({ auth }) => {
  const {
    firstName, lastName, rollNumber, email, password, passwordConfirm, error, fetching,
  } = auth;

  return {
    firstName, lastName, rollNumber, email, password, passwordConfirm, error, fetching,
  };
};

export default connect(mapStateToProps, {
  firstNameChanged,
  lastNameChanged,
  rollNumberChanged,
  emailChanged,
  passwordChanged,
  passwordConfirmChanged,
  registerRequest,
})(Register);
