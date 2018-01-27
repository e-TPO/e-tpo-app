import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import {
  fetchNoticeRequest,
} from '../actions';
import {
  API_ENDPOINT,
} from 'react-native-dotenv';

class Notice extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.data = null;
    this.renderItem = this._renderItem.bind(this);
  }

  componentWillMount() {
    this.props.fetchNoticeRequest();
  }

  _keyExtractor(post, index) {
    return index;
  }

  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
      >
        <RkCard style={styles.card}>
          <View rkCardHeader>
            <View>
              <RkText rkType="header4">{info.item.title}</RkText>
              <RkText rkType="secondary2 hintColor">{info.item.start_date}</RkText>
            </View>
          </View>
          <Image rkCardImg source={{uri: API_ENDPOINT+'/static/assets/img/new_logo.png'}} />
          <View style={styles.footer} rkCardFooter>
            <View><Text>{info.item.description}</Text></View>
          </View >
        </RkCard>
      </TouchableOpacity>
    );
  }

  render() {
    if (this.props.fetch) {
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.container}
      />
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
  footer: {
    paddingTop: 16,
  },
  time: {
    marginTop: 5,
  },
}));

const mapStateToProps = ({ notice }) => {
  const { data, fetch } = notice;

  return { data, fetch };
};

export default connect(mapStateToProps, { fetchNoticeRequest })(Notice);
