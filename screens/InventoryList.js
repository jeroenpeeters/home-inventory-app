import * as Exponent from 'exponent';
import React, { Component } from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import * as firebase from 'firebase';
import stringify from '../utilities/stringify'

import { Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, getTheme } from 'native-base';

export default class InventoryList extends Component {

  render() {
    const color = getTheme().variables.brandPrimary;
    return (
      <Container>
        <Container style= {{flex: 0, height: Exponent.Constants.statusBarHeight, backgroundColor:color}} />
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Inventory</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.onAddPressed}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>

        <Content>
          {this.props.items.map( (item) =>
            <ListItem key={item}>
              <Text>{item}</Text>
            </ListItem>
          )}
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}
