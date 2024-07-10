import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ProductDetailsScreen from './Screens/DetailsScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Jewelery from './Screens/Jewelery';
import Electronic from './Screens/Electronic';
import CustomDrawerContent from './Components/CustomDrawerContent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeStack" drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
            drawerActiveBackgroundColor: 'transparent',
            drawerActiveTintColor: 'black',
            drawerInactiveTintColor: 'black',
            drawerInactiveBackgroundColor: 'transparent',
            drawerItemStyle: { backgroundColor: 'transparent' },
            drawerLabelStyle: { color: 'black', fontSize: 18 },
            
          }}>
          <Drawer.Screen name="Store" component={HomeStack} options={{ headerShown: false }} />
          <Drawer.Screen name="Men's Clothing" component={HomeStack} options={{ headerShown: false }}/>
          <Drawer.Screen name="Jewelery" component={Jewelery}/>
          <Drawer.Screen name="Electronics" component={Electronic} />
          <Drawer.Screen name="Women's Clothing" component={HomeStack} options={{ headerShown: false }}/>
          <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fff',
  },
});
