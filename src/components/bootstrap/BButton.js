import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function BButton({ type = "primary", onPress, children }) {
    return (
        <TouchableOpacity style={[styles.btn, styles[type]]} onPress={onPress}>
            <Text style={[styles.label, styles[`${type}Text`]]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 6,
        marginVertical: 4
    },

    primary: { backgroundColor: '#0d6efd' },
    secondary: { backgroundColor: '#6c757d' },
    success: { backgroundColor: '#198754' },
    danger: { backgroundColor: '#dc3545' },
    warning: { backgroundColor: '#ffc107' },
    info: { backgroundColor: '#0dcaf0' },
    dark: { backgroundColor: '#212529' },
    light: { backgroundColor: '#f8f9fa', borderWidth: 1, borderColor: '#ced4da' },

    label: { fontWeight: '600', textAlign: 'center' },
    primaryText: { color: '#fff' },
    secondaryText: { color: '#fff' },
    successText: { color: '#fff' },
    dangerText: { color: '#fff' },
    warningText: { color: '#000' },
    infoText: { color: '#000' },
    darkText: { color: '#fff' },
    lightText: { color: '#212529' }
});
