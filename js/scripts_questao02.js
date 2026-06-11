//Pegando elementos do DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//Capturando o evento de submit
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const form_num = new FormData(formDados)

    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))

    console.log(num1, num2)

    let parede = parseFloat(num1 * num2) / parseFloat(2)
    let area = parseFloat(num1 * num2)

    divResultado.innerHTML = parede = `Vai ser necessário ${parede.toFixed(2).replace('.', ',')} litros de tinta para pintar ${area}m²`

})