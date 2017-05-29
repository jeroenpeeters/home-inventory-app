import * as Exponent from 'exponent';
import React, { Component } from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import { Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, getTheme, InputGroup } from 'native-base';
import { Form, Item, Input, Label, Picker } from 'native-base';
const PickerItem = Picker.Item

import {withState, compose} from 'recompose'

const withName = withState('name', 'setName', '')
const withQuantity = withState('quantity', 'setQuantity', '')
const withQuantityType = withState('quantityType', 'setQuantityType', '')
const withStateProps = compose(withName, withQuantity, withQuantityType)
const color = getTheme().variables.brandPrimary

const NewItemUI = withStateProps(({ name, quantity, quantityType, setName, setQuantity, setQuantityType, onBackPressed, onSavePressed }) => {
  return (
    <Container>
      <Container style= {{flex: 0, height: Exponent.Constants.statusBarHeight, backgroundColor:color}} />
      <Header>
        <Left>
          <Button transparent onPress={onBackPressed}>
            <Icon name='md-arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>New item</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => onSavePressed(name, quantity, quantityType)}>
            <Icon name='checkmark' />
          </Button>
        </Right>
      </Header>

      <Content>
        <Form>
          <Item floatingLabel >
            <Label>Description {name} - {quantity} - {quantityType}</Label>
            <Input style={{paddingLeft:5}} onChangeText={(name) => setName(name)}  />
          </Item>
          <Item>
            <Input placeholder='Quantity' keyboardType="numeric" onChangeText={(quantity) => setQuantity(quantity)}  />
            <Content>
              <Picker
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={quantityType}
                  onValueChange={(quantityType) => setQuantityType(quantityType)}>
                  <PickerItem label="times" value="times" />
                  <PickerItem label="gram" value="gr" />
                  <PickerItem label="kilo" value="k" />
              </Picker>
            </Content>
          </Item>

          {/* <Item floatingLabel last>
            <Label>Quantity</Label>
            <Input onChangeText={this.props.onDescriptionChange}/>
          </Item> */}
        </Form>
      </Content>
    </Container>
  )
})

export default NewItemUI;
