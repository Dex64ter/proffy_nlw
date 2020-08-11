// Procurar o botão 
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// Quando clicar no botão

// Executar uma ação
function cloneField() {   
    // duplicar os campos                                                            // bollean: true ou false
    const newFieldContain = document.querySelector('.schedule-item').cloneNode(true) // Node se refere a estruturas html
    
    // Limpar os campos: quais campos?
    const fields = newFieldContain.querySelectorAll('input')

    // Para cada campo: limpar
    fields.forEach(function (field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })
    
    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContain)

}