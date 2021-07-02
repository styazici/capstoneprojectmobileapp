
import React from 'react';
import { StyleSheet , TextInput} from 'react-native';

export default function Input({ style, ...props}) {
  return (
        <TextInput {...props} style = {[ styles.input, style]} placeholderTextColor= {"#F0F8FF"} fontSize= {16} 
        fontWeight = {'bold'} color = {'#F5FFFA'}
        />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(0.3, 0.3, 0.3, 0.3)',
    borderWidth: 3,
    borderColor: '#A0522D',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    color: '#F0F8FF',
    
  }
});
