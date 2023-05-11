import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert
} from "react-native";
// import { firebase } from "../../firebase";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import Another from "./Another";

const LoginForm = ({navigation}) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 8 characters"),
  });

  // const onLogin = async (email, password) => {
  //   try{
  //     await firebase.auth().signInWithEmailAndPassword(email, password)
  //     console.log(" firebase Login", email, password)
  //   } catch ( error ){
  //     Alert.alert(error.message)
  //   }
  // }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log('bruh');
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                style={{ fontSize: 18 }}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View style={styles.inputField}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                style={{ fontSize: 18  }}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}

              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <TouchableOpacity>
                <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={{ color: "white", fontWeight: 500, fontSize: 20 }}>
                Log In
              </Text>
            </Pressable>
            
              <Another/>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Text style={{ color: "#6BB0F5" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    marginTop: 70,
  },

  inputField: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    borderColor:'#ccc'
  },
  button: (isValid) => ({
    backgroundColor: isValid ?  "#0096F6":"#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 20,
  }),
  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;