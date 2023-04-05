import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { Icon } from './Home'
import WeeklyCalendar from 'react-native-weekly-calendar';
import LottieView from 'lottie-react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import BottomTabs from '../../BottomTabs';

const Report = ({ navigation }) => {

  return (
    <>

    {/* 1set widget */}
      <View style={tw`items-center mt-12 flex-row ml-4 mr-4 justify-between`} >

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home")
          }}
        >
          <Icon icon="arrow-left" />
        </TouchableOpacity>

        <Text style={tw`font-bold text-base`}>
          Baby Detail
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Calenders")
          }}
        >
        <Icon icon="calendar" />
        </TouchableOpacity>
      </View>

      <View style={tw`border border-slate-400 mt-1 `} />
     
     {/* weekly calendar */}
      <View style={tw`mt-2`}>
        <WeeklyCalendar style={tw`h-100px`} />
      </View>

    {/* 2nd widget  */}
      <View style={tw`h-48 w-342px bg-red-500 flex-col ml-2 rounded-lg shadow-lg mt-2`}>
        <LottieView style={tw`self-center h-32 `}
          source={require("../Animation/92259-red-cherries.json")}
          autoPlay
          loop={true}
          speed={1.5}

        />      
        <View style={tw`items-center  `}>
          <Text style={tw`font-bold text-sm text-white shadow-md `}>
            Childbirth
          </Text>
          <Text style={tw`font-bold text-3xl text-white shadow-md`}>
            260 Days Left
          </Text>
        </View>
      </View>

      {/* 3rd widget  */}
      <View style={tw`h-310px w-330px shadow-md rounded-md ml-4 flex-col `}>

        <Widget icon={"calendar"} text={"weight"} text1={"ABout 0.7oz"} />
        <View style={tw`border w-72 ml-4 border-slate-400  `} />
        <Widget icon={"ruler"} text={"Length"} text1={"ABout 0.9en"} />
        <View style={tw`border w-72 ml-4 border-slate-400  `} />
        <Widget icon={"calendar"} text={"Childbirth"} text1={"Dec-5-19"} />
        <View style={tw`border w-72 ml-4 border-slate-400  `} />
        <Widget icon={"calendar"} text={"pregnancy"} text1={"Week 9"} />
        <View style={tw`border w-72 ml-4 border-slate-400  `} />

        <View style={tw`flex-row justify-center mt-3`}>
          <TouchableOpacity
            style={tw` ml-4 rounded-3xl items-center justify-center bg-red-500 font-bold h-10 w-36`}
            onPress={() => {

              navigation.navigate("Report");
            }
            }
          >
            <Text style={tw` font-medium text-lg`}>
              SHARE
            </Text>

          </TouchableOpacity>
        </View>
      </View>

      {/* BottomTabs */}
      <View style={tw`mt-4 shadow-sm`}>
          <BottomTabs navigation={navigation} />
        </View>
    </>
  )
}

export default Report


const Widget = ({ icon, text, text1 }) => (
  <>
    <View style={tw`flex-row mx-4 my-4`}>
      <View style={tw`flex-row items-center  `}>
        <FontAwesome5
          name={icon}
          size={25}

        />
        <Text style={tw`ml-2 font-thin text-base`}>
          {text}
        </Text>
      </View>
      <Text style={tw`ml-28 font-thin text-base`}>
        {text1}
      </Text>

    </View>
  </>
)