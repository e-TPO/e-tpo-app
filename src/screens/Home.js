import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {
  RkButton, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';

const paddingValue = 8;

export default class Home extends React.Component {
  calculateItemSize() {
    const { height, width } = Dimensions.get('window');
    return (width - paddingValue * 6) / 2;
  }

  render() {
    const size = this.calculateItemSize();
    return (
      <View>
        <TouchableHighlight
          style={styles.item}
          activeOpacity={1}
          onPress={() => Actions.notice()}
        >
          <View style={styles.container}>
            <RkText
              style={styles.icon}
              rkType="primary moon xxlarge"
            >
              <Icon name="list-alt" size={30} />
            </RkText>
            <RkText>Notice</RkText>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16,
  },
  list: {
    backgroundColor: theme.colors.screen.base,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 34,
    textAlign: 'center',
    marginRight: 16,
  },
}));
