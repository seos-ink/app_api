import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#3fb39aff',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    list: {
        fontSize: 18,
        color: '#fff',
    },
    bg: {
        flex: 1,
        backgroundColor: '#696666ff',
        padding: 20,
    }
});

export default styles;