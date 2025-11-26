import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BAlert({ type = 'info', children }) {
    const stylesByType = {
        danger: {
            container: alertStyles.danger,
            text: alertStyles.dangerText,
        },
        warning: {
            container: alertStyles.warning,
            text: alertStyles.warningText,
        },
        success: {
            container: alertStyles.success,
            text: alertStyles.successText,
        },
        info: {
            container: alertStyles.info,
            text: alertStyles.infoText,
        }
    };

    const selected = stylesByType[type] || stylesByType.info;

    return (
        <View style={selected.container}>
            <Text style={selected.text}>{children}</Text>
        </View>
    );
}

const alertStyles = StyleSheet.create({
    danger: {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        marginVertical: 8
    },
    dangerText: {
        color: '#721c24',
        fontSize: 15,
        textAlign: 'center',
    },

    warning: {
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba',
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        marginVertical: 8
    },
    warningText: {
        color: '#856404',
        fontSize: 15,
        textAlign: 'center',
    },

    success: {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        marginVertical: 8
    },
    successText: {
        color: '#155724',
        fontSize: 15,
        textAlign: 'center',
    },

    info: {
        backgroundColor: '#d1ecf1',
        borderColor: '#bee5eb',
        borderWidth: 1,
        padding: 12,
        borderRadius: 6,
        marginVertical: 8
    },
    infoText: {
        color: '#0c5460',
        fontSize: 15,
        textAlign: 'center',
    }
});
