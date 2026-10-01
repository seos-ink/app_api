import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "row",
        margin: 5,
        padding: 5,
        borderRadius: 15,
        backgroundColor: "#ccc",
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000",
        justifyContent: "center",
        // width: "80%",
    },
    subtitulo: {
        fontSize: 14,
        color: "#222",
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: 10,
    }
});

export default estilo;