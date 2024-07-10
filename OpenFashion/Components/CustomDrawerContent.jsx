import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
  return (
    
    <DrawerContentScrollView {...props}>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Store')} style={styles.drawerHeaderfx}>
          <View style={styles.drawerHeader}>
            <Image
              source={require('../assets/Close.png')}
              style={styles.headerImage}
            />
            </View>
        </TouchableOpacity>
        <View style={styles.hju}>
          <View>
              <Text style={styles.headerTitle}>Muiz Bello</Text>
          </View>
        <Text style={styles.h1}>   ________________</Text>
        
          </View> 
      <DrawerItemList {...props} />
      </View>
        
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginLeft: -222,
    marginTop: -10,
  },
  hju:{
      flexDirection: 'column',
  },
  drawerHeaderfx:{

  },
  h1:{
    fontSize: 12,
    marginTop: -10,
    alignSelf: 'flex-start',
    marginLeft: 26,
    marginBottom: 10,
  
  },
  headerTitle: {
    fontSize: 24,
    flex: 1,
    height: 70,
    marginLeft: 18,
    marginBottom: -40,
  }
});

export default CustomDrawerContent;
