import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather";

const API_KEY = "abbc68919e6b6d4296b60cafacd58803";

export default class App extends Component {

  state = {
    isLoaded : false,
    error : null,
    temperature : null,
    name : null,
    place : null,
  };

  componentDidMount(){ 
    console.log("didMount");
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this._getWeather(position.coords.latitude,position.coords.longitude)
      this.setState({
        error : null
      });
  }, (err) => {
      console.log(err);
      this.setState({
        error : err
      });
  }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 })
    
  }
  
  _getWeather = (lat,lon) =>{
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID='+API_KEY)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature : json.main.temp,
        name : json.weather[0].main,
        isLoaded : true,
        place : json.name
      });
    })
  }

  render() {
    const {isLoaded ,error,temperature, name,place} = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (<Weather weatherPlace={place} weatherName={name} temp={Math.floor(temperature -273.15)}></Weather>) : (
        <View style={styles.load}>
          <Text style={styles.loadTitle}>만섭 날씨앱</Text>
        {error ? (<Text>{error}</Text>) : 
        (<Text style={styles.loadText}>기둘기둘...</Text>)}
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  load : {
    flex : 1,
    backgroundColor : "#fff885",
    justifyContent : "center",
    alignItems : "center",
  },
  loadText : {
    color : "black",
    fontSize : 30
  },
  loadTitle : {
    fontSize : 55,
    marginBottom : 20,
  }
});
