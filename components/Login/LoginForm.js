import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const LoginForm = () => {
  return (
    <View style={{margin:10}}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Số điện thoại"
          autoCapitalize="none"
          keyboardType="email-andress "
          textContentType="email-andress"
          autoFocus={true}
        />
        <TextInput
          placeholderTextColor="#444"
          placeholder="Mật khẩu"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry = {true}
          textContentType="password"
        />
        <Button title="Log in" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {},
});

export default LoginForm;
