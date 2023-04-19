import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

const Btn = (props) => {
  console.log(props);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "skyblue",
        padding: 15,
        margin: 10,
        borderRadius: 7,
      }}
      onPress={() => props.onPress()}
    >
      <Text style={{ fontSize: 35, color: "#fff" }}>
        {props.children || props.title}
      </Text>
    </TouchableOpacity>
  );
};

//Btn 기본값설정
Btn.defaultProps = {
  title: "저장",
  name: "bt",
};
Btn.propTypes = {
  title: PropTypes.string.isRequired, //isRequired 는 필수 여부 지정
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Btn;
