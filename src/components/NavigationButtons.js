import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from "../assets/globalStyles";

export default function NavigationButtons({navigation}) {
    return <>
        <View style={globalStyles.navRow}>
            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('Welcome')}
            >
                <Text style={globalStyles.navLabel}>Welcome</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('Details')}
            >
                <Text style={globalStyles.navLabel}>Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('StackDashboard')}
            >
                <Text style={globalStyles.navLabel}>Gerações</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('About')}
            >
                <Text style={globalStyles.navLabel}>Sobre</Text>
            </TouchableOpacity>
        </View>
    </>
}
