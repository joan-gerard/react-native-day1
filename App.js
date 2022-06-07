import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";

const App = () => {
  const [firstnumber, setfirstnumber] = useState("");
  const [secondnumber, setsecondnumber] = useState("");
  const [operator, setoperator] = useState("");
  const [display, setdisplay] = useState("");

  const calculate = () => {
    switch (operator) {
      case "+":
        setdisplay(Number(firstnumber) + Number(secondnumber));
        break;
      case "-":
        setdisplay(Number(firstnumber) - Number(secondnumber));
        break;
      case "*":
        setdisplay(Number(firstnumber) * Number(secondnumber));
        break;
      case "/":
        setdisplay(Number(firstnumber) / Number(secondnumber));
        break;
      default:
        alert("Something went wrong!!");
        break;
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
      <StatusBar style="auto" />
      <Text style={styles.result}>Result: {display}</Text>
      <TextInput
        onChangeText={setfirstnumber}
        placeholder="first number"
        style={styles.input}
      />
      <TextInput
        onChangeText={setoperator}
        placeholder="operator"
        style={styles.input}
      />
      <TextInput
        onChangeText={setsecondnumber}
        placeholder="second number"
        style={styles.input}
      />
      <Pressable onPress={calculate} style={styles.button}>
        <Text>Calculate result</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: 100
    // justifyContent: "center",
  },
  input: {
    height: 40,
    width: 100,
    borderWidth: 1,
    backgroundColor: "#AEDDF0",
    padding: 5,
    margin: 2,
  },
  button: {
    borderWidth: 1,
    margin: 6,
    padding: 5,
    backgroundColor: "#F9A487",
  },
  result: {
    margin: 6,
    fontSize: 22,
  },
});
