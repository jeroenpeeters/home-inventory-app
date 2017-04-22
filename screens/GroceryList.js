import * as Exponent from 'exponent';
import React, { Component } from 'react';
import * as firebase from 'firebase';
import stringify from '../utilities/stringify'

import { Container, Content, ListItem, Text, List } from 'native-base';
import { Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, getTheme, Spinner } from 'native-base';

export default class InventoryList extends Component {

  render() {
    const color = getTheme().variables.brandPrimary;
    let content = null
    if(this.props.items.length > 0){
      content = this.props.items.map( (item) =>
        <ListItem key={item.name}>
          <Left>
            <Text>{item.name}</Text>
            <Text note>Some details</Text>
          </Left>
          <Right>
            <Icon name="md-checkmark" style={{ color: '#0A69FE' }} />
          </Right>
        </ListItem>
      )
      content = <List>{content}</List>
    }else {
      content = <Spinner color='blue' />
    }
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
            <Title>Grocery List</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.onAddPressed}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>

        <Content>
          {content}
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
