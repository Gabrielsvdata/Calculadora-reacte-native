export default function funcaoSoma(number1, number2) {
  const sum = parseFloat(number1) + parseFloat(number2);
  if (isNaN(sum)) {
    return 'Erro: Por favor, insira números válidos.';
  } else {
    return `A soma é: ${sum}`;
  }
}