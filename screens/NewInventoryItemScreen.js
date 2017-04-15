import * as Exponent from 'exponent';
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Container, Content, ListItem, Text } from 'native-base';
import * as firebase from 'firebase';
import stringify from '../utilities/stringify'

import { Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, getTheme } from 'native-base';
import { Form, Item, Input, Label } from 'native-base';

const NewInventoryItemScreen = React.createClass({
  render() {
    const color = getTheme().variables.brandPrimary;
    return (
      <Container>
        <Container style= {{flex: 0, height: Exponent.Constants.statusBarHeight, backgroundColor:color}} />
        <Header>
          <Left>
            <Button transparent onPress={this.props.onBackPressed}>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>New item</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.onSavePressed}>
              <Icon name='checkmark' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item floatingLabel >
              <Label>Description</Label>
              <Input style={{paddingLeft:5}} onChangeText={this.props.onDescriptionChange}  />
            </Item>
            {/* <Item floatingLabel last>
              <Label>Quantity</Label>
              <Input onChangeText={this.props.onDescriptionChange}/>
            </Item> */}
          </Form>
        </Content>
      </Container>
    );
  }
});

export default NewInventoryItemScreen;
