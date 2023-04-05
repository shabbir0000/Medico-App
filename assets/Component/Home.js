import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';
import tw from "twrnc";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React, { useState, useEffect } from 'react'
import LottieView from 'lottie-react-native'
import BottomTabs from '../../BottomTabs';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  
 

  return (
    <>
      
        {/* calendar */}
        <View >
        
        <LottieView style={tw`self-center  h-96 absolute `}
          source={require("../Animation/71852-cherries.json")}
          autoPlay
          loop={true}
          speed={1.5}
          
        />
      </View>
        <View style={tw`bg-transparent mt-5`} >

          <Calendar

            hideExtraDays={true}
            hideArrows={true}
            theme={{
              calendarBackground: "transparent"

            }}

          />

        </View>
        <View style={tw`mt-10 mx-10 h-24  w-80  ml-4 bg-white shadow-md rounded-md border-black  relative\ `}>

          <View style={tw`flex-row `}>
            <Text style={tw`text-red-600 mx-4 font-semibold text-lg my-2`}>
              260 Days Left
            </Text>
            <Text style={tw`text-red-600 mx-16 font-semibold text-lg my-2`}>
              Week,Day 9
            </Text>
          </View>

          <View style={tw`flex-row`}>
            <View style={tw` ml-4 `}>
              <Icon icon="calendar" text='Childbirth' />

            </View>

            <View style={tw` ml-100px `}>
              <Icon icon="calendar" text='Pregnancy' />
            </View>
          </View>

        </View>

        {/* content container */}
        <View style={tw`mt-2 rounded-md shadow-lg bg-white h-24 w-96   justify-center  `}>
          <Text style={tw`font-bold text-xl ml-3`}>
            Current status
          </Text>
          <Text style={tw`text-slate-400 ml-3`}>
            Your baby is now graduated from embroy to fetus-and us
            now about the size of cherry the digestive track and reproduce
            organs are formed but its still too ..more
          </Text>
        </View>

        {/* next screen component */}
        <View style={tw`mt-2 h-120px w-80 mx-4 flex-row rounded-md  shadow-black shadow-md bg-red-500 `}>
          <View>
            <Text style={tw`text-white  text-2xl font-bold mx-4 my-2`}>
              How Big Is
              {"\n"}
              My Baby ?
            </Text>

            <TouchableOpacity
              style={tw` ml-4 rounded-xl items-center bg-white font-bold h-6 w-20`}
              onPress={() => {
                
                navigation.navigate("Report");
              }
              }
            >
              <Text style={tw` font-medium text-lg`}>
                View
              </Text>

            </TouchableOpacity>
          </View>
          <View style={tw`mx-6`}>
            <LottieView style={tw`h-32`}
              source={require("../Animation/52128-womens-day.json")}
              autoPlay
              loop={true}
              speed={1.5}
            />
          </View>
        </View>

        {/* </ScrollView> */}
        <View style={tw`mt-4 shadow-sm`}>
          <BottomTabs navigation={navigation} />
        </View>

     



    </>
  );


}

export default Home;

export const Icon = (props) => (
  <View style={tw`flex-row items-center  `}>
    <FontAwesome5
      name={props.icon}
      size={25}

    />
    <Text style={tw`ml-2`}>
      {props.text}
    </Text>
  </View>
)
