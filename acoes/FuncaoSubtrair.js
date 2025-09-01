export default function funcaoSubtrair(number1, number2) {
  const sub = parseFloat(number1) - parseFloat(number2);
  if (isNaN(sub)) {
    return 'Erro: Por favor, insira números válidos.';
  } else {
    return `A subtração é: ${sub}`;
  }
}
