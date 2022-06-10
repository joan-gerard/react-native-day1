import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  SafeAreaView,
} from "react-native";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<number>();

  const calculate = () => {
    switch (operator) {
      case "+":
        setResult(Number(num1) + Number(num2));
        break;
      case "-":
        setResult(Number(num1) - Number(num2));
        break;
      case "*":
        setResult(Number(num1) * Number(num2));
        break;
      case "/":
        setResult(Number(num1) / Number(num2));
        break;
      default:
        alert("Something went wrong!!");
        break;
    }
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text>Calculator</Text>
        {/* <StatusBar style="auto" /> */}
        <Text style={styles.result} testID="result">
          {result}
        </Text>
        <TextInput
          onChangeText={setNum1}
          placeholder="Enter number..."
          style={styles.input}
          value={num1}
          keyboardType="numeric"
          testID="firstnumber"
        />
        <TextInput
          onChangeText={setOperator}
          placeholder="operator"
          style={styles.input}
          testID="operator"
        />
        <TextInput
          onChangeText={setNum2}
          placeholder="Enter second number..."
          style={styles.input}
          value={num2}
          keyboardType="numeric"
          testID="secondnumber"
        />
        <Pressable
          onPress={() => {
            calculate();
          }}
          style={styles.button}
          testID="calculate"
        >
          <Text>Get result</Text>
        </Pressable>
        <View style={styles.history}>
          <Text>History:</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    top: 100,
  },
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    width: 170,
    borderWidth: 1,
    backgroundColor: "#AEDDF0",
    padding: 5,
    margin: 2,
    borderRadius: 12,
  },
  button: {
    borderWidth: 1,
    margin: 6,
    padding: 5,
    backgroundColor: "#F9A487",
    width: 100,
  },
  result: {
    margin: 6,
    fontSize: 22,
  },
  history: {
    alignItems: "flex-start",
    marginTop: 5,
  },
});
