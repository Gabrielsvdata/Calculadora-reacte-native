export default function funcaoPercentual(number1, number2) {
  const perc = (parseFloat(number1) / 100) * parseFloat(number2);
  if (isNaN(perc)) {
    return 'Erro: Por favor, insira números válidos.';
  } else {
    return `${number1}% de ${number2} é: ${perc}`;
  }
}
