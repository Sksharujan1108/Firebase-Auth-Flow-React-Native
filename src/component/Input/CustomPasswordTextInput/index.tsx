import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error?: string | undefined;
}

const CustomPasswordTextInput = (props: TextInputProps) => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    onBlur,
    error,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.input,
          // focused && styles.activeInputFocused,
          error !== undefined && error !== "" && styles.errorInputContainer,
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            onBlur && onBlur(e);
          }}
          secureTextEntry={!showPassword}  // Toggle password visibility
          keyboardType={keyboardType}
        />
        <TouchableOpacity 
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AntDesign name="eyeo" size={24} color="black" />
          ) : (
            <AntDesign name="eye" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomPasswordTextInput;
