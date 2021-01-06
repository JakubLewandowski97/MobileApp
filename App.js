import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, Image, View, SafeAreaView, Button, Alert, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';





export default class MyProject extends Component {
 
  constructor(){
 
    super();
 
    this.state={
 
      // This is our Default number value
      NumberHolder : 1
 
    }
  }
 
GenerateRandomNumber=()=>
{
 
var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
 
this.setState({
 
  NumberHolder : RandomNumber
 
})
}
 
  render() {
  return (
    
    <SafeAreaView style={styles.container}>
      
      <View style={styles.bigspace} />
      <Text style={{marginBottom: 2, fontSize: 80, color: '#FF0000'}}>{this.state.NumberHolder}</Text>
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
      <Button 
      style={styles.button}
      title="Rozpocznij pomiar" 
      color= "red"
      onPress={this.GenerateRandomNumber} 
      
      //{() => Alert.alert("Pomiar", "Czy palec jest przyłożony do kamery?",[
       // { text: "Tak", onPress: () => console.log("tak")},
       // {text: "Nie", onPress: () => console.log("nie")}

      //])}
      />
      <View style={styles.space} />
      <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
  }
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, 
    height: 20,
  },
  
  bigspace:{
    width: 20, 
    height: 300,
  },
});
