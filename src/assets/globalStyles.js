import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        padding: 12,
        gap: 10
    },
    navRow: {
        flexDirection: 'row',
        padding: 12,
        gap: 10,
        width: '100%'
    },
    navBtn: {
        flex: 1,
        backgroundColor: '#4A90E2',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    navLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
});
