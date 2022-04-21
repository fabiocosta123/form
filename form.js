// pega dados dos inputs e select
let nome = document.getElementById('name').value
let lastName = document.getElementById('lastName').value
let email = document.getElementById('email').value


// função que armazena dados 
function recebeDados() {
    let nome = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value


    const recDados = [{
        nome: nome, sobrenome: lastName,
        email: email
    }]

    return recDados

}

// função seleciona turma 
function turma() {
    let select = document.getElementById('csvGroup')
    let optionValue = select.options[select.selectedIndex]
    let value = optionValue.value // pega o valor do select
    let text = optionValue.text // pega o nome do valor


}

//pegar dados da aplicação (linguagem em que programa)

/*let frontend = document.querySelector('#front-end').value
let backend = document.getElementById('back-end').value
let fullstack = document.getElementById('full-stack').value*/


let check = document.querySelector('input[type="radio"]:checked').value
console.log(check)









