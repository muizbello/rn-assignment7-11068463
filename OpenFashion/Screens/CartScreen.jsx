import { Text,StyleSheet,View, Image,ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CartScreen({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View>
                    <Text>
                        Checkout
                    </Text>
                </View>
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        margin: 5,
       }
    })