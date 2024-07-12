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
                
              <View style={{marginBottom: 10}}>
                    {cart.map((item, index) => (
                    <View style={{flex: 1, marginTop: 15, backgroundColor: '#ffffff',elevation: 5, alignSelf: 'flex-start', justifyContent: 'center'}} key={index}>
                      <View style={{flexDirection: 'row', width: 330}}>
                          <View style={{backgroundColor: '#fff'}}>
                            <Image source={{uri: item.image}} style={styles.image} resizeMode="contain" />
                          </View>
                          <View style={{marginTop: 25, width: 200}}>
                            <View style={{justifyContent: 'flex-start', flex: 1}}>
                              <Text style={{fontSize: 16, marginTop: -23}}>{item.title}</Text>
                              <Text style={{textTransform: 'capitalize'}}>{item.category}</Text>
                              <Text numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                            <Text style={{color: '#8D8A85', fontSize: 18}}>{item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(index)}>
                            <Image source={require('../assets/remove.png')}></Image>
                            </TouchableOpacity>
                            </View>
                          </View>
                      </View>
                      
                    </View>
                    
                    ))}
                    
                </View>
                <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', position: 'static', marginTop: 380}}>
                      <Text style={{fontSize: 16}}>Est. Total</Text>
                      <Text style={{fontSize: 18, color: '#8989A5'}}>$22.30</Text>
                    </View>
                    <View style={{flexDirection: 'row', padding:10, justifyContent: 'center',backgroundColor: '#000',height: 90, marginLeft: -1, marginRight: -1}}>
                        <Image style={{backgroundColor: '#000',marginRight: 15,marginTop: 20}}source={require('../assets/shoppingBag.png')} />
                        <Text style={{color: '#fff',marginLeft: 0,marginRight: 15, marginTop: 22,fontSize: 16}}>CHECKOUT</Text>
                        
                    </View>
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
        width: 120,
        height: 150,
        marginRight: 5,
        marginTop: 5
      }
    })