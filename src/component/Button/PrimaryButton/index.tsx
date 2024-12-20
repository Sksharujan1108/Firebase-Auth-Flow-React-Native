import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';

interface PrimaryButtonProps {
    label: string
    onPress: () => void
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    const { label, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;