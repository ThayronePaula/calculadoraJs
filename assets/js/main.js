function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliqueBotoes();
        this.pressionaEnter();
    };
    this.pressionaEnter = function () {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }
    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1)
    }
    this.clearDisplay = function () {
        this.display.value = ' '
    }
    this.realizaConta = function () {
        let conta = this.display.value;

        try {
            conta = eval(conta)
            if (!conta) {
                alert('Erro de conta')
                return
            }
            this.display.value = String(conta)

        } catch (error) {
            alert('Erro de conta')
            return
        }
    }
    this.btnParaValor = function (valor) {
        this.display.value += valor;
    }
    this.cliqueBotoes = function () {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaValor(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
            if (el.classList.contains('btn-del')) {
                this.apagaUm()
            }
            if (el.classList.contains('btn-eq')) {
                this.realizaConta()
            }

        });
    };

}




const calcula = new Calculadora;

calcula.inicia()













// function criaCalculador() {
//     return {
//         display: document.querySelector('.display'),

//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },
//         pressionaEnter() {
//             this.display.addEventListener('keypress', e => {
//                 if (e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             })
//         },

//         realizaConta() {
//             let conta = this.display.value;
//             try {
//                 conta = eval(conta);
//                 if (!conta) {
//                     alert('Conta inválida')
//                     return
//                 }

//                 this.display.value = String(conta)

//             } catch (e) {
//                 alert('Conta inválida')
//                 return
//             }
//         },


//         clearDisplay() {
//             this.display.value = '';
//         },
//         apagaUm() {
//             this.display.value = this.display.value.slice(0, -1)
//         },


//         cliqueBotoes() {
//             document.addEventListener('click', e => {
//                 const el = e.target;

//                 if (el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }
//                 if (el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }
//                 if (el.classList.contains('btn-del')) {
//                     this.apagaUm()
//                 }
//                 if (el.classList.contains('btn-eq')) {
//                     this.realizaConta()
//                 }
//             });
//         },
//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         }






//     };
// }

// const calculadora = criaCalculador();
// calculadora.inicia();


