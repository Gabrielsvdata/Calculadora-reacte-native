import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function JurosCompostosScreen() {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [tempo, setTempo] = useState('');
  const [montante, setMontante] = useState(null);

  const calculateJurosCompostos = () => {
    const c = parseFloat(capital);
    const i = parseFloat(taxa) / 100;
    const t = parseFloat(tempo);
    const m = c * Math.pow(1 + i, t);
    setMontante(m.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de Juros Compostos</Text>
      <TextInput
        style={styles.input}
        placeholder="Capital Inicial"
        keyboardType="numeric"
        value={capital}
        onChangeText={setCapital}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros (a.m.)"
        keyboardType="numeric"
        value={taxa}
        onChangeText={setTaxa}
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo (meses)"
        keyboardType="numeric"
        value={tempo}
        onChangeText={setTempo}
      />
      <Button title="Calcular" onPress={calculateJurosCompostos} />
      {montante && <Text style={styles.result}>Montante: R$ {montante}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});