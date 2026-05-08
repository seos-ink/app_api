import { Text, View } from "react-native";
import { useEffect, useState} from "react";


export default function Index() {
  const [msg, steMsg] = useState("Loading...");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const ip = '127.0.0.1'; // IP do servidor (localhost)

    // busca rota 1
    fetch(`http://${ip}:4000/dados`)
      .then(res => res.json())
      .then(json => setMsg(json.message));
    // busca rota 2
    fetch(`http://${ip}:4000/lista`)
      .then(res => res.json())
      .then(json => setLista(json));
  }, []); // o array vazio [] garante que o useEffect seja executado apenas uma vez, quando o componente for montado




  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <View>
        <Text style={{ fontWeight:'bold',}}> Rota Dados:</Text>
        <Text style={{ fontWeight:'bold' }}>{msg}</Text>
      </View>
      <View>
      <Text style={{ fontWeight:'bold',}}> Rota Lista:</Text>
      {lista.map(item => (
        <Text key={item.id}>{item.nome}</Text>
      ))}
      </View>
      

    </View>
  );
}
