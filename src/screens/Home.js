import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  Button,
} from 'react-native';
import {
  RkButton, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import { FontAwesome } from '@expo/vector-icons/FontAwesome';

const paddingValue = 8;

export default class Home extends React.Component {
  render() {
    return (
        <View>
          <Button
            onPress={() => Actions.notice()}
            title="Title"
          />
        </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.scroll,
    padding: paddingValue,
  },
  rootContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginBottom: 16,
  },
}));
