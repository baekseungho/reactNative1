import React from "react";
import { Text, View } from "react-native";
import Btn from "./components/Btn";
import PressHit from "./components/PressHit";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 35, marginBottom: 15 }}>버튼 테스트</Text>
      <PressHit />
      {/* <Btn title="move" />
      <Btn title="Action">Second Bt</Btn>
      <Btn /> */}
    </View>
  );
};

export default App;
