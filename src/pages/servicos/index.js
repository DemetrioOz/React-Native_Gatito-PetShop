import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";

import Item from "./item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Não de banho no seu cachorro! Mas se precisar nos damos",
  },
  {
    id: 2,
    nome: "Tosa",
    preco: 89.9,
    descricao: "Tosa para seu cachorro",
  },
  {
    id: 3,
    nome: "Tosa Higienica",
    preco: 69.9,
    descricao: "Tosa Higienica para seu cachorro",
  },
];

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços</Text>
      <FlatList
        data={servicos}
        renderItem={({ item }) => {
          return <Item {...item} />;
        }}
        keyExtractor={({ id }) => String(id)}
      />
    </SafeAreaView>
  );
}
