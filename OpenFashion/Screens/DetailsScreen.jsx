import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


export default function ProductDetailsScreen({ navigation }) {
  const route = useRoute();
  const { item } = route.params;

 
  
  return (
    <SafeAreaView>
      <ScrollView style={styles.headerd} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header1}>
            <View>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={styles.sect1} source={require('../assets/Menu.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <Image style={styles.sect2} source={require('../assets/Logo.png')} />
            </View>
            <View style={styles.sect3}>
              <Image style={styles.secxt3} source={require('../assets/Search.png')} />
              <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <Image style={styles.secxt3} source={require('../assets/shoppingBag.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
          </View>
          <View style={styles.guy}>
          <Text style={styles.titleText}>
            {item.title}
          </Text>
          <Image source={require('../assets/Export.png')}/>
          </View>
          <Text style={styles.categoryText}>
             {item.category}
          </Text>
          <Text style={styles.priceText}>
            {item.price}
          </Text>
          <View>
            <Text style={styles.mat1}>
                MATERIALS
            </Text>
            <View style={styles.matt}>
            <Text style={styles.categoryText}>
                We work with monitoring programmes to {'\n'} ensure compliance with safety, health and {'\n'} quality standards for our products.
            </Text>
            </View>
            <View>
                <View style={styles.losp}>
                <Image style={{marginRight: 17}} source={require('../assets/Do Not Bleach.png')} />
                    <Text>
                        Do not use bleach
                    </Text>
                </View >
                <View style={styles.losp}>
                <Image style={{marginRight: 17}} source={require('../assets/Do Not Tumble Dry.png')} />
                <Text>
                        Do not use tumble dry
                    </Text>
                </View>
                <View style={styles.losp}>
                <Image style={{marginRight: 17}} source={require('../assets/Do Not Wash.png')} />
                <Text>
                        Dry clean with tetraclhoroethylene
                    </Text>
                </View>
                <View style={styles.losp}>
                    <Image style={{marginRight: 17}}source={require('../assets/Iron Low Temperature.png')} />
                <Text>
                        Iron at a maximum of 110℃/230℉
                    </Text>
                </View>
                <View style={{marginTop: -1}}>
                <Text >_____________________________________________</Text>
            
                </View>
                <View>
                    <View style={{flexDirection: 'row',marginBottom: 90, marginTop: 12}}>
                        <Image source={require('../assets/Shipping.png')} />
                         <Text style={{marginLeft: 12,marginRight: 52}}>Free Flat Rate Shipping{'\n'}
                        Estimated to be delivered on {'\n'}
                        09/11/2024 - 13/11/2024
                    </Text>
                    <Image source={require('../assets/Up.png')} />
                    </View>
                    
                    
                </View>
            </View>
            
          </View>
          
        </View>
        <View style={{flexDirection: 'row', padding:10, justifyContent: 'space-between',backgroundColor: '#000',height: 90, marginLeft: -1, marginRight: -1}}>
                        <Image style={{backgroundColor: '#000',marginTop: 20}}source={require('../assets/Plus.png')} />
                        <Text style={{color: '#fff',marginLeft: -150, marginTop: 20,fontSize: 16}}>Add to Basket</Text>
                        <Image style={{backgroundColor: '#000',marginTop: 20}} source={require('../assets/Heart.png')} />
                    </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  losp:{
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerd: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    
  },
  mat1:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  matt:{
    flexWrap: 'wrap',
    width: 300,
    
  },
  guy:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sect1: {
    alignSelf: 'center',
    marginTop: 1,
    width: 30,
    height: 32,
  },
  sect2: {
    alignSelf: 'center',
    marginLeft: 25,
  },
  sect3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secxt3: {
    marginLeft: 10,
    width: 27,
    height: 29,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  productImage: {
    width: 300,
    height: 300,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8D8A85',
    marginVertical: 10,
    marginTop: -5,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  categoryText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#000',
    marginTop: 5,
    flexWrap: 'wrap',
  }
});
