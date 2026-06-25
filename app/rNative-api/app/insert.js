import { Text, View, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";

import Styles from "./_style";


export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  const handleInsert = async () => {
    const ip = '127.0.0.1';

    fetch(`http://${ip}:4000/usuarios`, {
      

  })

  // const [msg, setMsg] = useState("Loading...");
  // const [lista, setLista] = useState([]);
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const ip = '127.0.0.1'; // IP do servidor (localhost)

  //   // busca rota 1
  //   fetch(`http://${ip}:4000/dados`)
  //     .then(res => res.json())
  //     .then(json => setMsg(json.message));
  //   // busca rota 2
  //   fetch(`http://${ip}:4000/lista`)
  //     .then(res => res.json())
  //     .then(json => setLista(json));

  //   fetch(`http://${ip}:4000/usuarios`)
  //     .then(res => res.json())
  //     .then(json => setUsers(json));

  // }, []); // o array vazio [] garante que o useEffect seja executado apenas uma vez, quando o componente for montado
  return (

    <View style={Styles.bg}>
      
      <Link href="./" style={Styles.link} asChild>
        <TouchableOpacity style={Styles.linkButton}>
          Retornar a página de Teste
        </TouchableOpacity>
      </Link>

      <View style={Styles.container}>
        <TextInput style={Styles.input}
          placeholder="Digite o nome do usuário"
          onChangeText={(text) => setName(text)}
        />
        <TextInput style={Styles.input}
          placeholder="Digite o email do usuário"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={Styles.input}
          placeholder="Digite o status do usuário"
          onChangeText={(text) => setStatus(text)}
        />
        <button style={Styles.linkButton} onPress={handleInsert}>
          Inserir Usuário
        </button>

      </View>

      <Text style={Styles.title}>Dados</Text>
      <ScrollView style={Styles.scrollContainer}>
        <View style={Styles.container}>

          <View style={Styles.usersContainer}>
            {users.map(user => (
              <Text key={user.id} style={Styles.list}>{user.name} - {user.email} - {user.status}</Text>
            ))}
          </View>
        </View>
      </ScrollView>


    </View>
  );
}
