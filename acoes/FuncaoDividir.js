export default function funcaoDividir(number1, number2) {
  const num2 = parseFloat(number2);
  if (num2 === 0) {
    return 'Erro: Divisão por zero não é permitida.';
  }
  const div = parseFloat(number1) / num2;
  if (isNaN(div)) {
    return 'Erro: Por favor, insira números válidos.';
  } else {
    return `A divisão é: ${div}`;
  }
}
