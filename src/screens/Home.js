import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  RkButton, RkStyleSheet,
  RkText,
} from 'react-native-ui-kitten';
import {
  Container, Header, Content, Footer, FooterTab, Button, Icon, Text,
  Left, Right, Body, Title,
} from 'native-base';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const paddingValue = 8;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#8E44AD' }}>
          <Left />
          <Body>
            <Title>E-TPO HOME</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <TouchableOpacity
            style={styles.item}
            onPress={() => Actions.notice()}
          >
            <View style={styles.container}>
              <RkText
                style={styles.icon}
                rkType="primary moon xxlarge"
              >
                <FontAwesome name="list-alt" size={30} />
              </RkText>
              <RkText>Notice</RkText>
              <FontAwesome style={{ marginLeft: 150 }} size={20} name="arrow-right" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => Actions.notice()}
          >
            <View style={styles.container}>
              <RkText
                style={styles.icon}
                rkType="primary moon xxlarge"
              >
                <FontAwesome name="bell" size={30} />
              </RkText>
              <RkText>Notifications</RkText>
              <FontAwesome style={{ marginLeft: 100 }} size={20} name="arrow-right" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => Actions.notice()}
          >
            <View style={styles.container}>
              <RkText
                style={styles.icon}
                rkType="primary moon xxlarge"
              >
                <FontAwesome name="th-list" size={30} />
              </RkText>
              <RkText>Articles</RkText>
              <FontAwesome style={{ marginLeft: 140 }} size={20} name="arrow-right" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => Actions.notice()}
          >
            <View style={styles.container}>
              <RkText
                style={styles.icon}
                rkType="primary moon xxlarge"
              >
                <FontAwesome name="ticket" size={30} />
              </RkText>
              <RkText>Placement Sessions</RkText>
              <FontAwesome style={{ marginLeft: 45 }} size={20} name="arrow-right" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => Actions.notice()}
          >
            <View style={styles.container}>
              <RkText
                style={styles.icon}
                rkType="primary moon xxlarge"
              >
                <FontAwesome name="user" size={30} />
              </RkText>
              <RkText>Update Resume</RkText>
              <FontAwesome style={{ marginLeft: 80 }} size={20} name="arrow-right" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => Actions.notice()}
          >
            <View style={styles.container}>
              <RkText
                style={styles.icon}
                rkType="primary moon xxlarge"
              >
                <FontAwesome name="folder-open" size={30} />
              </RkText>
              <RkText>Send Documents</RkText>
              <FontAwesome style={{ marginLeft: 70 }} size={20} name="arrow-right" />
            </View>
          </TouchableOpacity>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#fff' }}>
            <Button vertical>
              <Icon name="home" style={{ color: 'red' }} />
            </Button>
            <Button vertical>
              <Icon name="ios-notifications" style={{ color: 'red' }} />
            </Button>
            <Button vertical onPress={() => Actions.search()}>
              <Icon active name="search" style={{ color: 'red' }} />
            </Button>
            <Button vertical onPress={() => Actions.settings()}>
              <Icon name="cog" style={{ color: 'red' }} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = RkStyleSheet.create(theme => ({
  item: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.border.base,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  list: {
    backgroundColor: '#ffffff',
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
