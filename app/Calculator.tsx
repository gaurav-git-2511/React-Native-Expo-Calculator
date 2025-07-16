import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    ["C", "/", "*", "Del"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", ".", "", ""],
  ];

  const handlePress = (btn: string) => {
    if(btn === "C"){
      setInput("");
      setResult("");
    } else if(btn === "=") {
      try{
        setResult(eval(input).toString());
      } catch{
        setResult("Error");
      }
    } else{
      setInput(input + btn);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => {
          return (
            <View key={rowIndex} style={styles.row}>
              {row.map((btn, colIndex) => {
                return (
                  <TouchableOpacity key={colIndex} style={styles.button}
                  onPress={() => {
                    btn === "Del"? setInput(input.slice(0, -1)) : handlePress(btn)
                  }}>
                    <Text style={styles.buttonText}>{btn}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "flex-end",
  },
  result: {
    padding: 20,
  },
  inputText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "right",
  },
  resultText: {
    fontSize: 40,
    color: "#0f0",
    textAlign: "right",
  },
  buttons: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    minWidth: 70,
    alignItems: "center",
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
  },
});

export default Calculator;
