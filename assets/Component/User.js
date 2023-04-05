import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { signOut, getAuth } from "firebase/auth";


const User = ({ navigation }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const signout = async () => {
    try {
      signOut(auth);
      navigation.navigate("Login");
    }


    catch (error) {
      Alert.alert("Plzz Login First");
    }
  }

  return (
    <>

    <View style={tw`mt-20 justify-center items-center `}>
      <Text style={tw`font-bold text-3xl text-slate-500`}>
        PROFILE
      </Text>
    </View>
      <View style={tw`justify-center items-center mt-10`}>
        <Text1 name="Email" type={user.email} />
        <Text1 name="Email-Verified" type={user.emailVerified ? "True" : "False"} />
        <Text1 name="Joined At" type={user.metadata.creationTime} />
        <Text1 name="Last Login At" type={user.metadata.lastSignInTime} />
      </View>
      <View style={tw`mt-10 items-center`}>

        <TouchableOpacity
          title="login"
          style={tw`bg-red-400 rounded-2xl h-10 w-40 justify-center`}
          onPress={() => {
            signout()
          }}
        >
          <Text style={tw`text-xl text-white font-bold text-center`}>
            LOG-OUT
          </Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

export default User;

const Text1 = ({ name, type }) => (
  <>
    <View style={tw`mt-6 items-center bg-red-400 text-white justify-center rounded-md shadow-md w-64 h-16`}>
      <Text style={tw`text-lg text-white`}>
        {name}
      </Text>
      <Text style={tw` text-white`}>
        {type}
      </Text>
    </View>
  </>
)