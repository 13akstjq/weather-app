import React , {Component} from "react";
import {View , Text, StyleSheet} from "react-native";
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases ={
    Rain : {
        colors : ["#00c6fb","#2a4eff"],
        title : "비가 주륵주륵",
        subtitle : "정보 더보기",
        icon : "weather-pouring"
    },
    Clear : {
        colors : ["#fff999","#fff10f"],
        title : "햇빛이 쨍쨍",
        subtitle : "정보 더보기",
        icon : "weather-sunny"
    },
    Tunderstorm : {
        colors : ["#adffd7","#00f07b"],
        title : "천둥이 우르르쾅쾅",
        subtitle : "정보 더보기",
        icon : "weather-lightning"
    },
    Clouds : {
        colors : ["#d1d3d2","#707573"],
        title : "구름이 구름구름",
        subtitle : "정보 더보기",
        icon : "weather-cloudy"
    },
    Snow : {
        colors : ["#43daff","#b8f1ff"],
        title : "흰눈이 펑펑",
        subtitle : "정보 더보기",
        icon : "weather-snowy"
    },
    Drizzle : {
        colors : ["#10daf8","#07f2d1"],
        title : "가랑비가 쪼륵쪼륵",
        subtitle : "정보 더보기",
        icon : "weather-rainy"
    },
    Haze : {
        colors : ["#10daf8","#07f2d1"],
        title : "안개가 안개",
        subtitle : "정보 더보기",
        icon : "weather-hail"
    },
    Mist : {
        colors : ["#10daf8","#07f2d1"],
        title : "미스트가 촉촉",
        subtitle : "정보 더보기",
        icon : "weather-fog"
    }
}

    function Weather({temp,weatherName,weatherPlace}){
        console.log(weatherPlace)
        return(
                <LinearGradient colors={weatherCases[weatherName].colors} style={styles.Container}>
                                <View style={styles.upper}>
                                    <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}></MaterialCommunityIcons>
                                    <Text style={styles.temp}>{temp}°</Text>
                                </View>
                                <View style={styles.lower}>
                                    <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                                    <Text style={styles.place}>{weatherPlace}</Text>
                                    <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
                                </View>
                        </LinearGradient>
                    );
        }

        export default Weather;
Weather.propTypes={
    temp : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired,
    weatherPlace : PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    Container : {
        flex : 1
    },
    upper : {
        flex : 1,
        justifyContent : "flex-end",
        alignItems : "center"
    },
    lower : {
        flex : 1,
        alignItems : "flex-start",
        justifyContent : "flex-end",
        paddingLeft : 20
    },
    icon : {

    },
    temp  : {
        fontSize : 33,
        color : "white"
    },
    title : {
        
        fontSize : 35,
        color : "#FFF"
    },
    subtitle :{
        fontSize : 24,
        color : "#FFF",
        marginBottom : 20
    },
    place : {
        fontSize : 18,
        color : "#FFF"
    }
});