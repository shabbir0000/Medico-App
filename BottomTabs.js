import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomTabs = ({ navigation }) => {
    //const {email,name,emailverified,piclink} = route.params;
    return (
        <View
            style={tw`flex-row  justify-between m-1 mx-4 bg-transparent  `}
        >

            {/* home  */}
            <TouchableOpacity
                // style={tw`mt-2 ml-4 rounded-xl bg-blue-300 font-bold h-10 w-18`}
                onPress={() => {
                    navigation.navigate("Home");
                }
                }
            >
                <Icon icon="home" text='Home' />
            </TouchableOpacity>

            {/* calendar */}
            <TouchableOpacity
                // style={tw`mt-2 ml-4 rounded-xl bg-blue-300 font-bold h-10 w-18`}
                onPress={() => {
                    navigation.navigate("Calenders");
                }
                }
            >

                <Icon icon="calendar" text='Calender' />

            </TouchableOpacity>

            {/* report  */}
            <TouchableOpacity
                // style={tw`mt-2 ml-4 rounded-xl bg-blue-300 font-bold h-10 w-18`}
                onPress={() => {
                    navigation.navigate("Report");
                }
                }
            >
                <Icon icon="file" text='Report' />

            </TouchableOpacity>

            {/* user  */}
            <TouchableOpacity
                // style={tw`mt-2 ml-4 rounded-xl bg-blue-300 font-bold h-10 w-18`}
                onPress={() => {
                    navigation.navigate("Users");
                }
                }
            >
                <Icon icon="user" text='User' />
            </TouchableOpacity>



        </View>
    )

}

const Icon = (props) => (
    <View>
        <FontAwesome5
            name={props.icon}
            size={25}
            style={tw` self-center`}
        />
        <Text>
            {props.text}
        </Text>
    </View>
)

export default BottomTabs