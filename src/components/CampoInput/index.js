import React from "react";
import { TextInput } from "react-native";

export default function CampoInput({ valor, acao }) {
  const update = (newValue, actionReturn) => {
    const verifyInt = newValue.match(/^[0-9]*$/);
    if (!verifyInt) return;

    const removeZeroLeft = newValue.replace(/^(0)(.*)/, "$2");
    actionReturn(removeZeroLeft);
  };

  const numeroString = String(valor);

  return (
    <TextInput
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(newValue) => {
        update(newValue, acao);
      }}
      value={numeroString}
    />
  );
}
