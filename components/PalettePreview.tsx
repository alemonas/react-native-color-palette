import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';

function PalettePreview({handlePress, colorPalette}: any) {
  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        // horizontal={true}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({item}) => (
          <View style={[styles.box, {backgroundColor: item.hexCode}]} />
        )}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
  },
  box: {
    height: 30,
    width: 30,
    backgroundColor: 'gray',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
  list: {
    marginBottom: 15,
    flexDirection: 'row',
  },
});

export default PalettePreview;
