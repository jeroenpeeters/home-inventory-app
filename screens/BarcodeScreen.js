import React from 'react';
import { Text, View } from 'react-native';
import Exponent, { Components, Permissions } from 'exponent';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (typeof hasCameraPermission === 'null') {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <Components.BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{flex: 1}}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data));
  }
}
