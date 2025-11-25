import {globalStyles} from "../assets/globalStyles";
import {Text, TouchableOpacity, View} from "react-native";

export default function BackHomeButton({navigation}) {
    return <>
        <View style={globalStyles.buttonRow}>
            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('Welcome')}
            >
                <Text style={globalStyles.navLabel}>Voltar para inicial</Text>
            </TouchableOpacity>
        </View>
    </>
}

