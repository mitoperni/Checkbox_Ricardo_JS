const inputCheckbox = document.getElementById('terms')
const sendButton = document.getElementById('send')
let confirmed = false

inputCheckbox.addEventListener('change', () => {
    confirmed = inputCheckbox.value
})

function handleSubmit () {
    if (confirmed) {
        alert("Se ha enviado el formulario")
    } else {
        alert("Necesitas aceptar las condiciones")
    }
}

sendButton.addEventListener('click', handleSubmit)
