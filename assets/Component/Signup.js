import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import {Error, Input, InputButton, Lootieview } from './LSFC'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth'
import { app } from '../../Firebase'
import { getFirestore, collection } from 'firebase/firestore/';

import LottieView from 'lottie-react-native'





const Signup = ({ navigation }) => {

  const [GetData, setGetData] = useState([{}]);
  const [accesstoken, setaccesstoken] = useState("");
  const [loading, setloading] = useState(false)
  const [data1, setdata1] = useState("");
  const [data2, setdata2] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getFirestore(app);
  const coll = collection(db, "order1");

  // validation setup
  const Validation = Yup.object().shape({

    email: Yup.string().required("Email must be filled"),
    password: Yup.string().min(5, "Min five char required").required("Password must be filled"),
  })

  const loginwithemailandpass = async (email, pass) => {
    
      
      createUserWithEmailAndPassword(auth, email, pass)
      .then((data)=>{
            console.log(data.user.email)
        navigation.navigate("Login");
   
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("verification email has been sent");
        })
      })
      .catch((error)=>{
           Alert.alert("this :" , error.message)
      })
  }

 
  return (

          <>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Validation}
              onSubmit={(values) => (
                loginwithemailandpass(values.email, values.password)
              
                //adddata()
              )}>


              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                values,
                isValid }) => (

                <SafeAreaView style={tw` flex-1`}>
                  <Lootieview source={require("../Animation/87317-working-women.json")} />

                 

                  <Input
                    placeholder="SIGN-UP EMAIL"
                    onchangetext={handleChange('email')}
                    onblur={handleBlur('email')}
                    value={values.email}
                  />

                  <Error error={errors.email} />


                  <Input
                    placeholder="CREATE PASSWORD"
                    onchangetext={handleChange('password')}
                    onblur={handleBlur('password')}
                    value={values.password}
                  />

                  <Error error={errors.password} />

                  <View style={tw`flex-row justify-center pt-5 `}>
                    <InputButton bgcolor="black" text="SIGN-UP"
                      onPress={handleSubmit}
                    />
                  </View>

                 
               
                
                </SafeAreaView>
              )}
            </Formik>
          </>
  )
}


export default Signup