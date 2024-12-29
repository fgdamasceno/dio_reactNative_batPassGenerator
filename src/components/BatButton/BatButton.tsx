import React, { useState } from "react";
import { Button, View, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    setPass("Hi there!");
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>⚡GENERATE</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => console.log("Fui pressionado")}
      >
        <Text style={styles.text}>⚡COPY</Text>
      </Pressable>
    </>
  );
}
