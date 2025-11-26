import {globalStyles} from "../assets/globalStyles";
import {Text, TouchableOpacity, View} from "react-native";

export default function BackStackButton({navigation}) {
    return <>
        <View style={globalStyles.buttonRow}>
            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.getParent()?.navigate('Favorite')}
            >
                <Text style={globalStyles.navLabel}>◀️ Favoritos</Text>
            </TouchableOpacity>
        </View>
    </>
}

