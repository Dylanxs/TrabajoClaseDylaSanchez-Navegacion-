import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';  
import ColorCard from './ColorCard';

const colorCategories = [
  {
    categoryTitle: 'Colores Aqueous',
    colors: [
      { colorName: 'Turquoise', colorHex: '#1abc9c', colorImage: require('../img/turquesa.jpg') },
      { colorName: 'Emerald', colorHex: '#2ecc71', colorImage: require('../img/esmeralda.jpeg') },
      // ... otros colores
    ],
  },
  {
    categoryTitle: 'Natural Colors',
    colors: [
      { colorName: 'Nephritis', colorHex: '#27ae60', colorImage: require('../img/nephiris.png') },
      { colorName: 'Belize Hole', colorHex: '#2980b9', colorImage: require('../img/belize.jpg') },
      // ... otros colores
    ],
  },
  {
    categoryTitle: 'Other Colors',
    colors: [
      { colorName: 'Alizarin', colorHex: '#e74c3c', colorImage: require('../img/Alizarin.jpg') },
      { colorName: 'Clouds', colorHex: '#ecf0f1', colorImage: require('../img/clouds.jpg') },
      // ... otros colores
    ],
  },
];

export default function ColorCategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredColors = selectedCategory
    ? colorCategories.find(category => category.categoryTitle === selectedCategory)?.colors || []
    : [];

  return (
    <View style={styles.screenContainer}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.categoryPicker}
      >
        <Picker.Item label="Seleccione una categoría" value={null} />
        {colorCategories.map((category) => (
          <Picker.Item key={category.categoryTitle} label={category.categoryTitle} value={category.categoryTitle} />
        ))}
      </Picker>
      <View style={styles.colorListContainer}>
        <FlatList
          data={filteredColors}
          keyExtractor={(color, index) => color.colorName + index}
          renderItem={({ item: color }) => <ColorCard {...color} />}
          numColumns={3}
          contentContainerStyle={styles.colorList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  categoryPicker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  colorListContainer: {
    flex: 1,
  },
  colorList: {
    paddingBottom: 20,
    justifyContent: 'center',
  },
});
