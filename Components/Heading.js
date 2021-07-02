
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Heading({children, style, ...props}) {
  return (
        <Text {...props} style = {[styles.container, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 32,
    color: 'black',
  }
});
