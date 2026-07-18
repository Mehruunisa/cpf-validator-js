const isValidCPF = require('./validator');

const cpf = "529.982.247-25";

if (isValidCPF(cpf)) {
    console.log("Valid CPF");
} else {
    console.log("Invalid CPF");
}
