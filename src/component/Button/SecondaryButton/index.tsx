import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';

interface SecondaryButtonProps {
    label: string;
    onPress: () => void;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    const { label, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default SecondaryButton;