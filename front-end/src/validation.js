import swal from 'sweetalert/dist/sweetalert.min.js'

export default class validation {
    sucess() {
        document.querySelector('form').addEventListener('submit', event => {
            swal("Perfeito!", "Cadastro realizado com sucesso.", "success", {
                button: "Ok",
            });
            event.preventDefault()
        })
    }
}