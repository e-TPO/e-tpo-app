import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import axios from 'axios';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import {
  API_ENDPOINT,
} from 'react-native-dotenv';

export default class Article extends Component {
  state = {
    fetching: true,
    articles: [],
  }

  componentDidMount() {
    axios.get(`${API_ENDPOINT}/api/v1.0/get_article`)
      .then((response) => {
        this.setState({ fetching: false, articles: response.data.data });
      });
  }

  render() {
    if (this.state.fetching) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.articles}
            renderRow={item => (
              <ListItem>
                <Text>{item.title}</Text>
              </ListItem>)
            }
          />
        </Content>
      </Container>
    );
  }
}
