import React, { useState } from "react";
import { View, Text } from "react-native";
import Btn from "./Btn";

const PressHit = () => {
  const [hit, setHit] = useState(0);
  const [like, setLike] = useState(0);
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 30, margin: 1 }}>{hit} </Text>
      <Btn title="++" onPress={() => setHit(hit + 1)} />
      <Btn title="-" onPress={() => setHit(hit - 1)} />
      <Btn
        title={hit == 0 ? "좋아요" : "싫어요"}
        onPress={() => setLike(!like)}
      />
    </View>
  );
};

export default PressHit;
