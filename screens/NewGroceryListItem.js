import * as Exponent from 'exponent';
import React, { Component } from 'react';
import { Container, Content, ListItem, Text } from 'native-base';
import { Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, getTheme, InputGroup } from 'native-base';
import { Form, Item, Input, Label, Picker } from 'native-base';
const PickerItem = Picker.Item

export default React.createClass({
  onValueChange(a,b,c){
    console.log('onValueChange',a,b,c);
  },
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
            <Item>
              <Input placeholder='Quantity' keyboardType="numeric" onChangeText={this.props.onDescriptionChange}  />
              <Content>
                <Picker
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue='x'
                    onValueChange={this.onValueChange}>
                    <PickerItem label="X" value="x" />
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
    );
  }
});
