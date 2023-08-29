// Definição do objeto Banco
const Banco = {
    numeroConta: "123456",
    saldo: 5000,
    tipoConta: "Corrente",
    agencia: "1988",

    // Método para buscar o saldo atual
    buscarSaldo: function () {
        return this.saldo;
    },

    // Método para realizar um depósito
    deposito: function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
        } else {
            return "O valor do depósito deve ser maior que zero.";
        }
    },

    // Método para realizar um saque
    saque: function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
        } else if (valor <= 0) {
            return "O valor do saque deve ser maior que zero.";
        } else {
            return "Saldo insuficiente para realizar o saque.";
        }
    },

    // Método para obter o número da conta
    numeroDaConta: function () {
        return this.numeroConta;
    }
};

// Exemplos de uso
console.log("Número da Conta: " + Banco.numeroDaConta());
console.log("Saldo Atual: R$ " + Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log("Saldo Atual: R$ " + Banco.buscarSaldo());
