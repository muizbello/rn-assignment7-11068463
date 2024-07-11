import { Text,StyleSheet,View, Image,ScrollView, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function CartScreen({navigation}){
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const fetchCart = async () => {
        try {
          const existingCart = await AsyncStorage.getItem('cart');
          const cartItems = existingCart ? JSON.parse(existingCart) : [];
          setCart(cartItems);
        } catch (error) {
          console.error('Error fetching cart', error);
        }
      };
  
      fetchCart();
    }, []);
  
    const removeFromCart = async (index) => {
      try {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        await AsyncStorage.setItem('cart', JSON.stringify(newCart));
      } catch (error) {
        console.error('Error removing from cart', error);
      }
    };
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image source={require('../assets/Menu.png')} />
                  </TouchableOpacity>
                  <Text style={{marginLeft: 10, fontSize: 18}}>
                        Checkout
                    </Text>
                </View>
                
              <View>
                    {cart.map((item, index) => (
                    <View style={{flex: 1, marginTop: 15, width: 250, borderWidth: 1, borderRadius: 3, alignSelf: 'center', justifyContent: 'center'}} key={index}>
                      <View>
                          <View style={{backgroundColor: '#fff', height: 200}}>
                            <Image source={{uri: item.image}} style={styles.image} resizeMode="contain" />
                          </View>
                          <View>
                            <Text style={{textTransform: 'capitalize', marginTop: -20}}>{item.category}</Text>
                            <Text>{item.title}</Text>
                            
                            <Text numberOfLines={3} ellipsizeMode="tail">{item.description}</Text>
                            <Text>{item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(index)}>
                            <Image source={require('../assets/remove.png')}></Image>
                            </TouchableOpacity>
                          </View>
                      </View>
                    </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        margin: 5,
        padding: 5,
       },
       image: {
        width: 200,
        height: 150,
        
        
      }
    })