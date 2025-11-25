import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',   // mantém o conteúdo alinhado ao início horizontal
        justifyContent: 'flex-start', // mantém tudo no topo vertical
        padding: 16
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
        fontWeight: '700',
    },
    textTitle:{
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
        color: '#222'
    },
    textParagraph: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 16,
        color: '#444'
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
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center'
    },
    navLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    btnRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 12,
        gap: 10,
        width: '100%'
    },
});
