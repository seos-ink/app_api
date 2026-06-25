import { Text, View, TouchableOpacity, ScrollView, TextInput, Alert, Button } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";

import Styles from "./_style";


export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
  const ip = '127.0.0.1'; // IP do servidor (localhost)

  useEffect(() => {
    fetch(`http://${ip}:4000/usuarios`)
      .then(res => res.json())
      .then(json => setUsers(json));

  }, []);


  const handleInsert = async () => {    
    fetch(`http://${ip}:4000/insert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        status: status
      }),
    })
      .then(async res => {
        const json = await res.json();
        if (res.ok) throw new Error(json.message || 'Erro ao inserir usuário');
        return json;
      })
      .then(json => {
        Alert.alert('Sucesso', 'Usuário inserido com sucesso!');
        // Atualiza a lista de usuários após a inserção
        fetch(`http://${ip}:4000/usuarios`)
          .then(res => res.json())
          .then(json => setUsers(json));
        // Router.back();
      })

  }

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
          onChangeText={setName}
          value={name}
        />
        <TextInput style={Styles.input}
          placeholder="Digite o email do usuário"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput style={Styles.input}
          placeholder="Digite o status do usuário"
          onChangeText={setStatus}
          value={status}
        />
        <TouchableOpacity style={Styles.linkButton} onPress={handleInsert}>
          Inserir Usuário
        </TouchableOpacity>

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