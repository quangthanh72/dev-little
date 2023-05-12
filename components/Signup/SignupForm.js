import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { TextInput } from "react-native-gesture-handler";
  
  import { Formik } from "formik";
  import * as Yup from "yup";
  import Validator from "email-validator";
import Another from "../Login/Another";
  
  const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
      email: Yup.string().email().required("An email is required"),
      username: Yup.string().required().min(2, "A username is required"),
      password: Yup.string()
        .required()
        .min(6, "Your password has to have at least 8 characters"),
    });
  
    return (
      <View style={styles.wrapper}>
        <Formik
          initialValues={{ email: "", username: "", password: "", repeatpassword: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={SignupFormSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <View style={styles.inputField}>
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Username"
                  autoCapitalize="none"
                  textContentType="username"
                  style={{ fontSize: 18 }}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
              </View>
              
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
                  style={{ fontSize: 18 }}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
              <View style={styles.inputField}>
                <TextInput
                  placeholderTextColor="#444"
                  placeholder="Repeat password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="repeatpassword"
                  style={{ fontSize: 18 }}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.repeatpassword}
                />
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

              <View style={styles.logInContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                  <Text style={{ color: "#6BB0F5" }}> Log in</Text>
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
      backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 42,
      borderRadius: 20,
      marginTop:50
    }),
    logInContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",

    },
  });
  
  export default SignupForm;