import React, { Component } from 'react';

class FirebaseWrapper extends Component {

  constructor(props){
    super(props);

    this.state = props.init(this.props.myprops, (newState) => {
      this.setState(newState)
    });
  }

  render(){
    return (
      <this.props.component {...this.state} />
    );
  }
};

export default (comp, init) => {
  return React.createClass({
    render(){
      return (
        <FirebaseWrapper init={init} myprops={this.props} component={comp} />
      )
    },
  });
}
