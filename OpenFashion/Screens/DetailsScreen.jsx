
import { Text,StyleSheet, View, Image,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

export default function ProductDetailsScreen({navigation}){
    const route = useRoute();
    const {item} = route.params;

    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text>
                        Details
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}