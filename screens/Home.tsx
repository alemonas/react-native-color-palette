import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import PalettePreview from '../components/PalettePreview';

function Home({navigation}: any) {
  const [colorPalettes, setColorPalettes] = useState([]);

  useEffect(() => {
    const fetchColorPalette = async function () {
      try {
        const colorPalette = await fetch(
          'https://color-palette-api.kadikraman.now.sh/palettes',
        );
        console.log({colorPalette});
        const response: any = await colorPalette.json();
        console.log({response});
        setColorPalettes(response);
      } catch (error) {
        console.error(error.status);
      }
    };
    fetchColorPalette();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item: any) => item.paletteName}
      renderItem={({item}) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
