import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton/CustonButton';
import TextInputBox from './components/TextInputBox/TextInputBox.js';
import FuncaoSoma from './acoes/FuncaoSoma.js';
import FuncaoSubtrair from './acoes/FuncaoSubtrair.js';
import FuncaoMultiplicar from './acoes/FuncaoMultiplicar.js';
import FuncaoDividir from './acoes/FuncaoDividir.js';
import FuncaoPercentual from './acoes/FuncaoPercentual.js';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleSoma = () => {
    setResult(FuncaoSoma(number1, number2));
  };

  const handleSubtrair = () => {
    setResult(FuncaoSubtrair(number1, number2));
  };

  const handleMultiplicar = () => {
    setResult(FuncaoMultiplicar(number1, number2));
  };

  const handleDividir = () => {
    setResult(FuncaoDividir(number1, number2));
  };

  const handlePercentual = () => {
    setResult(FuncaoPercentual(number1, number2));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Calculadora</Text>
      <TextInputBox
        value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />
      <TextInputBox
        value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <CustomButton title="Soma" onPress={handleSoma} style={styles.buttonSoma} />
        <CustomButton title="Subtração" onPress={handleSubtrair} style={styles.buttonSubtrair} />
        <CustomButton title="Multiplicação" onPress={handleMultiplicar} style={styles.buttonMultiplicar} />
        <CustomButton title="Divisão" onPress={handleDividir} style={styles.buttonDividir} />
        <CustomButton title="Porcentagem" onPress={handlePercentual} style={styles.buttonPercentual} />
      </View>
      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonSoma: {
    backgroundColor: '#2196F3',
  },
  buttonSubtrair: {
    backgroundColor: '#F44336',
  },
  buttonMultiplicar: {
    backgroundColor: '#4CAF50',
  },
  buttonDividir: {
    backgroundColor: '#FF9800',
  },
  buttonPercentual: {
    backgroundColor: '#9C27B0',
    width: '100%',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
