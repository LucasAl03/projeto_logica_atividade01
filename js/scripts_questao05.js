//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

    console.log(num1, num2, num3)

    if((num1 == num2)&&(num2 == num3)){
        divResultado.innerHTML = ' Triângulo Equilátero '
    }else if((num1 != num2)&&(num1 != num3) || (num2 != num1)&&(num2 != num3)){
        divResultado.innerHTML = ' Triângulo Escaleno '
    }else{
        divResultado.innerHTML = ' Triângulo Isósceles '
    }

    

})