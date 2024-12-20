import { KeyboardTypeOptions, NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions | undefined;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    error?: string | undefined;
}

const CustomTextInput = (props: TextInputProps) => {
    const { label, placeholder, value, onChangeText, keyboardType, onBlur, error } = props;

    const [focused, setFocused] = useState(false);
  return (
    <View style = {styles.wrapper}>
      <Text style = {styles.label}>{label}</Text>
      <TextInput
        style= {[
            styles.input,
            focused && styles.activeInputFocused,
            error !== undefined && error !== '' && styles.errorInputContainer
        ]}
        placeholder = {placeholder}
        value = {value}
        onChangeText = {onChangeText}
        onFocus = {() => 
            setFocused(true)
        }
        onBlur={(e) => {
            setFocused(false);
            onBlur && onBlur(e);
        }}
      />
      {error && <Text style = {styles.error}>{error}</Text>}
    </View>
  )
}

export default CustomTextInput;