import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const IMCIllustration = ({ classification }) => {
  let width = 50;
  let color = 'gray';

  if (classification === 'Abaixo do peso') {
    width = 30;
    color = 'yellow';
  } else if (classification === 'Peso normal') {
    width = 50;
    color = 'green';
  } else if (classification === 'Sobrepeso') {
    width = 70;
    color = 'orange';
  } else if (classification.includes('Obesidade')) {
    width = 90;
    color = 'red';
  }

  return (
    <Svg height="100" width="100">
      <Rect x="5" y="5" width={width} height="90" fill={color} />
    </Svg>
  );
};

export default function IMCScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateImc = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const imcValue = w / (h * h);
    setImc(imcValue.toFixed(2));

    if (imcValue < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      setClassification('Peso normal');
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      setClassification('Sobrepeso');
    } else if (imcValue >= 30 && imcValue <= 34.9) {
      setClassification('Obesidade Grau I');
    } else if (imcValue >= 35 && imcValue <= 39.9) {
      setClassification('Obesidade Grau II');
    } else {
      setClassification('Obesidade Grau III');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calcular" onPress={calculateImc} />
      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Seu IMC é: {imc}</Text>
          <Text style={styles.result}>Classificação: {classification}</Text>
          <IMCIllustration classification={classification} />
        </View>
      )}
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
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
  },
});