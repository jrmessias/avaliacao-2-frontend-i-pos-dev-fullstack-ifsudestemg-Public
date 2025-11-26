import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from "../assets/globalStyles";

export default function NavigationButtons({navigation}) {
    return <>
        <View style={globalStyles.navRow}>
            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('Favorite')}
            >
                <Text style={globalStyles.navLabel}>Favoritos ⭐</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('List')}
            >
                <Text style={globalStyles.navLabel}>Pokémon ⚡</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('StackDashboard')}
            >
                <Text style={globalStyles.navLabel}>Gerações 🐲</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.navBtn}
                onPress={() => navigation.navigate('About')}
            >
                <Text style={globalStyles.navLabel}>Sobre ℹ️</Text>
            </TouchableOpacity>
        </View>
    </>
}
