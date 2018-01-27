import React from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class Notification extends React.Component {
  render() {
    const items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];
    return (
      <Container>
        <Header />
        <Content>
          <List
            dataArray={items}
            renderRow={item =>
              (
                <ListItem>
                  <Text>{item}</Text>
                </ListItem>
                )
            }
          />
        </Content>
      </Container>
    );
  }
}
