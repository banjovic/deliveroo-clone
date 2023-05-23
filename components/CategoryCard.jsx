import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={styles.text1}>Testing {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    position: 'relative',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  text1: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
