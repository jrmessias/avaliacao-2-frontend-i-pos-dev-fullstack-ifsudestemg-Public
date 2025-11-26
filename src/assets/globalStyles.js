import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 16,
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
    textTitle: {
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
        paddingVertical: 12,
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
    formRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 8,
    },
    formLabel: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        fontWeight: "600",
    },
    formInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 10,
    },
    formBtn: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 14,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formBtnText: {
        color: '#fff',
        fontWeight: '600',
    },
});
