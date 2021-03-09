import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import ColorBox from '../components/ColorBox';

function ColorPalette({route}: any) {
  const {colors, paletteName} = route.params;

  const renderItem = ({item}: any) => (
    <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <FlatList
          keyExtractor={(item) => item.hexCode}
          data={colors}
          renderItem={renderItem}
          ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  box: {
    fontWeight: 'bold',
    paddingVertical: 10,
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ColorPalette;
