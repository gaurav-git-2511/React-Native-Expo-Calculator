import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    if (btn === "C") {
      setInput("");
      setResult("");
    } else if (btn === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + btn);
    }
  };

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
                  <TouchableOpacity
                    key={colIndex}
                    style={styles.button}
                    onPress={() => {
                      btn === "Del"
                        ? setInput(input.slice(0, -1))
                        : handlePress(btn);
                    }}
                  >
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
    backgroundColor: "#1e1e1e",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  result: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginBottom: 10,
  },
  inputText: {
    fontSize: 36,
    color: "#bbb",
    textAlign: "right",
  },
  resultText: {
    fontSize: 48,
    color: "#00ff88",
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 10,
  },
  buttons: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 20,
    minWidth: 70,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "500",
  },
});
export default Calculator;
