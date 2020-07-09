const fields = document.querySelectorAll('[required]')

function validateField(field) {

    function verifyErrors() {
        let foundError = false

        for (const error in field.validity) {
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo."
            },
            email: {
                valueMissing: "E-mail é obrigatório.",
                typeMismatch: "Por favor, preencha um e-mail válido."
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.parentNode.querySelector('span.error')

        if (message) {
            spanError.innerHTML = message
        } else {
            spanError.innerHTML = ""
        }
    }

    return function() {

        const erro = verifyErrors()

        if (erro) {
            const message = customMessage(erro)
            field.parentNode.style.borderColor = "firebrick"
            setCustomMessage(message)
        } else {
            field.parentNode.style.borderColor = "#8AC04B"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = validateField(field)

    validation()
}


for (field of fields) {
    field.addEventListener('invalid', event => {
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener('blur', customValidation)
}

// document.querySelector('form').addEventListener('submit', event => {
//     console.log('formulario enviado!')
//     event.preventDefault()
// })