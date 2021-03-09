import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  colorName: string;
  hexCode: string;
}

const ColorBox: React.FC<Props> = ({colorName = '', hexCode = ''}) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxText: {
    color: 'white',
    textAlign: 'center',
  },
  box: {
    fontWeight: 'bold',
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default ColorBox;
