function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateCPF(cpf) {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const validateEmail = (email) => emailRegex.test(email);

const validateCPF = (cpf) => cpfRegex.test(cpf);

module.exports = {
  validateEmail,
  validateCPF
};
