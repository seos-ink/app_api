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
        fontSize: 30,
        color: '#eeeeeeff',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,

        textAlign: 'center',


        // borderBottomColor: 'black',
        // borderBottomWidth: 3,        
        // borderStyle: 'dashed',
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
        backgroundColor: '#00255563',
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
        width: '75%',
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
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#0768a8ff',
        padding: 10,
        borderColor: '#4586e9ff',
        borderWidth: 2,
        borderRadius: 15,
        width: '75%',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default styles;