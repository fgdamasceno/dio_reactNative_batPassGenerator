import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./BatLogoStyles";

export default function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        style={styles.image}
        source={require("../../../assets/bat-logo.png")}
      />
    </>
  );
}
