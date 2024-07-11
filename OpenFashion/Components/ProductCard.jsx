import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductCard = ({ id, title, price, category, description, image }) => {
  const item = { id, title, price, category, description, image };
  const navigation = useNavigation();
  const addToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      cart.push(item);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { item })}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
        <Text style={styles.category}>Category: {category}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity onPress={addToCart}>
          <Image source={require('../assets/add_circle.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 9,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 150,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  category: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#8D8A85',
  },
});

export default ProductCard;
