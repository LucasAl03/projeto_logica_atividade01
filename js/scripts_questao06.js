//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let Nome = (form_num.get('Nome'))
    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

    console.log(Nome, num1, num2)

    let imc = parseFloat(num1) /parseFloat(num2 * num2)

    if(imc < 20){
        divResultado.innerHTML = `${Nome} está Abaixo do Peso. IMC de ${imc.toFixed(2)}`
    }else if((imc >= 20) && (imc < 25)){
        divResultado.innerHTML = `${Nome} está Normal. IMC de ${imc.toFixed(2)}`
    }else if((imc >= 25) && (imc < 30)){
        divResultado.innerHTML = `${Nome} está com Excesso de Peso. IMC de ${imc.toFixed(2)}`
    }else if((imc >= 30) && (imc < 35)){
        divResultado.innerHTML = `${Nome} está com Obesidade. IMC de ${imc.toFixed(2)}`
    }else{
        divResultado.innerHTML = ` ${Nome} está com Obesidade Mórbida. IMC de ${imc.toFixed(2)}`
    }

})