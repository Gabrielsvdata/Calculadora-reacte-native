export default function funcaoMultiplicar(number1, number2) {
  const mult = parseFloat(number1) * parseFloat(number2);
  if (isNaN(mult)) {
    return 'Erro: Por favor, insira números válidos.';
  } else {
    return `A multiplicação é: ${mult}`;
  }
}
