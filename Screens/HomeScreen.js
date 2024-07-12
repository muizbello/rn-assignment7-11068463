import { Text,StyleSheet, View, Image,ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState,useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { ActivityIndicator } from "react-native";




export default function HomeScreen({navigation}){
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    

  useEffect(() => {
    const fetchdata = async() =>{
        try{
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {setProducts(json);
                            setLoading(false);
            });
        }
        catch(error){
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }
    fetchdata();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

    return(
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <SafeAreaView>
                <View >
                    <View style={styles.header1}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                 <Image style={styles.sect1} source={require('../assets/Menu.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                           <Image style={styles.sect2} source={require('../assets/Logo.png')}/>
                        </View>
                        <View style={styles.sect3} >
                          <Image style={styles.secxt3} source={require('../assets/Search.png')}/>
                          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                          <Image style={styles.secxt3} source={require('../assets/shopping bag.png')}/>
                          </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.header1}>
                        <View>
                            <Text style={styles.ban1} >
                                O U R   S T O R Y 
                            </Text>
                        </View>
                        <View style={styles.sectf3}>
                        <Image style={styles.secxt4} source={require('../assets/ui.png')}/>
                        <Image style={styles.secxt4} source={require('../assets/iu.png')}/>
                        </View>
                    </View>
                     

                    
                    <View style={styles.productholder}>
                    {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={`$${product.price}`}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        
                    />
                    ))}
                    </View>
                    
                </View>
                </SafeAreaView>
                
            </ScrollView>       
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
       },
       loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    header1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    productholder:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    ban1:{
        fontSize: 20,
        marginLeft: 5,
    },
    sect1:{
        alignSelf: 'center',
        marginTop: 1,
        width: 30,
        height: 32,
    },
    sect2:{
        alignSelf: 'center',
        marginLeft: 25,
    },
    sect3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    secxt3:{
        marginLeft: 10,
        width: 27,
        height: 29,
    },
    secxt4:{
        marginLeft: -2,
        width: 44,
        height: 46,
        marginTop: -3,
    },
    sectf3:{
        flexDirection: 'row',
        marginRight: -5,
        marginTop: -7,
    }
})