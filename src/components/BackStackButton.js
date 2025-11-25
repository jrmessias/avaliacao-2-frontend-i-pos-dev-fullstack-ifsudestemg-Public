import {globalStyles} from "../assets/globalStyles";
import {Text, TouchableOpacity, View} from "react-native";

export default function BackStackButton({navigation}) {
    return (
        <View style={globalStyles.buttonRow}>
            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.getParent()?.navigate('Welcome')}
            >
                <Text style={globalStyles.navLabel}>Voltar para inicial</Text>
            </TouchableOpacity>
        </View>
    );
}

