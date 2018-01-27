import React from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class Settings extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Profile</Text>
            </ListItem>
            <ListItem >
              <Text>Vinay Khobragade</Text>
            </ListItem>
            <ListItem>
              <Text>16115032</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Settings</Text>
            </ListItem>
            <ListItem>
              <Text>App Settings</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
