import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground,FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
      <ImageBackground source={require('./images/home.jpeg')} style={styles.bgImage}>
        <View style={styles.bgCol} >  
        <Text style={styles.titleText}>ST.PAULS MARTHOMA CHURCH KIZHAKKENMUTHOOR</Text>    
        <Text style={styles.listText} onPress={() => this.props.navigation.navigate('Message')}>
                                        Message From Vicar</Text>    
        <Text style={styles.listText} onPress={() => this.props.navigation.navigate('News')}>
                                        News</Text>    
        <Text style={styles.listText} onPress={() => this.props.navigation.navigate('Directory')}>
                                        Directory</Text>  
        <Text style={styles.titleText}></Text>   
        </View>    
        </ImageBackground> 
      </View>
    );
  }
}   

class MessageFromVicar extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.contentText}>തൽക്കാലം ഒന്നുമില്ല.. മ്മ് പൊക്കോ!!</Text>
      </View>
    );
  }
}
class News extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./images/church.png')} style={styles.bgImage}>
        <View style={styles.bgCol} > 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.contentText}>അടുത്ത ഞായറാഴ്ചയും 9 മണിക്ക് തന്നെ പള്ളി ഉണ്ടാകും .. :)</Text>
          </View>
          </View>
      </ImageBackground>
    );
  }
}
class Directory extends React.Component {
  render() {  
    return (
      <ImageBackground source={require('./images/directory.png')} style={styles.bgImage}>
        <View style={styles.bgCol} > 
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.contentText}>വീട്ടിൽ ഒരെണ്ണം ഇരിപ്പില്ലേ..തല്ക്കാലം അത് നോക്ക് :P</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Message: MessageFromVicar,
  News: News,
  Directory: Directory,
},
{
  initialRouteName: 'Home',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#fff',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    width: '100%',  
    height: '100%'      
  },
  bgCol:{
    flex: 1, 
    justifyContent: 'center',  
    backgroundColor: '#fff',
    opacity: 0.66       
  },
  listText: {     
    backgroundColor: '#fff',
    fontSize : 30,
    padding : 15,  
    borderColor : '#ccc',  
    borderWidth : 2,  
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    textAlign : 'center'
  },
  titleText: {     
    flex: 2,   
    fontSize : 40,
    fontWeight: 'bold',
    padding : 15, 
    paddingTop : 50,    
    margin: 5,
    justifyContent: 'center',
    textAlign : 'center'
  },
  contentText: {     
    fontSize : 50,
    fontWeight: 'bold',
    padding : 15, 
    paddingTop : 50,    
    margin: 5, 
    justifyContent: 'center',
    textAlign : 'center'
  },
}); 
