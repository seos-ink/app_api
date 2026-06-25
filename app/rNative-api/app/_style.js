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

        borderBottomColor: 'black',
        borderBottomWidth: 3,        
        borderStyle: 'dashed',
    },
    list: {
        fontSize: 18,
        color: '#fff',
        
    },
    listContainer: {
        backgroundColor: '#0c5041ff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        gap: 10,
    },
    bg: {
        flex: 1,
        backgroundColor: '#1d423f67',
        padding: 20,
    },
    usersContainer: {
        backgroundColor: '#003c6dff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#707070ff',
        width: '80%',
        alignItems: 'center',
        gap: 10,
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
    },
    link: {
        marginTop: 20,
        textDecorationLine: 'none',
        textAlign: 'center',
        padding: 10,
        color: '#fff',
        fontFamily: 'Arial',      
    },
    linkButton: {
        backgroundColor: '#2958adff',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderWidth: 3,
        borderColor: '#4586e9ff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: '#fff',
    },
});

export default styles;