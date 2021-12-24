import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import CampoInput from "../../../components/CampoInput";

import styles from "./style";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      <View style={styles.informacao}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{preco}</Text>
      </View>
      <View style={styles.carrinho}>
        <View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Quantidade:</Text>
            <CampoInput valor={quantidade} acao={setQuantidade} />
          </View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Preço: </Text>
            <Text style={styles.preco}>0</Text>
          </View>
        </View>
        <Button title="Adicionar" />
      </View>
      <View style={styles.divisor} />
    </>
  );
}
