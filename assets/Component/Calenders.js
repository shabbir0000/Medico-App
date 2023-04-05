import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tw from "twrnc";
import WeeklyCalendar from 'react-native-weekly-calendar';
import { Icon } from './Home'
import BottomTabs from '../../BottomTabs';

const Calenders = ({ navigation }) => {
  const sampleEvents = [
    { 'start': '2022-09-25 09:00:00', 'duration': '00:20:00', 'note': 'Eat Mornig Break-Fast' },
    { 'start': '2022-09-26 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
    { 'start': '2022-09-27 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
    { 'start': '2022-09-28 14:00:00', 'duration': '02:00:00', 'note': 'Ultra-Sound' },
    { 'start': '2022-09-29 19:00:00', 'duration': '01:00:00', 'note': 'Walk 1 km' },
    { 'start': '2022-09-30 09:30:00', 'duration': '01:00:00', 'note': 'Eat Fruits' },
  ]

  useEffect(() => {

  }, [sampleEvents])

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
          Assign From Your DOCTOR
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Report")
          }}
        >
          <Icon icon="calendar" />
        </TouchableOpacity>
      </View>

      <View style={tw`border border-slate-400 mt-3 w-80 ml-4 `} />

      {/* WeeklyCalendar  */}
      <View style={tw`mt-5 items-center`}>
        <WeeklyCalendar events={sampleEvents} style={tw`h-610px`} />

      </View>

      {/* BottomTabs */}
      <View style={tw` `}>
        <BottomTabs navigation={navigation} />
      </View>
    </>
  )
}

export default Calenders