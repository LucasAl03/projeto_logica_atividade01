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

    console.log(Nome, num1, num2, num3)

    let media = parseFloat(num1 + num2 + num3) / parseFloat(3)


    divResultado.innerHTML = media = `A média foi de ${media.toFixed(2).replace('.', '.')}, ${Nome} foi `
})

