/* posso acessar por tag: getElementById();
Id: getElementById(); 
nome:  getElementByname();
classe:  getElementByClasseName();
seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let video = document.querySelector('#video')

nome.style.width= "26.1%"
email.style.width= "26.1%"

function validaNome() {

let txtNome = document.querySelector("#txtNome")
if (nome.value.length < 3) {
   txtNome.innerHTML = "NOME Inválido!"
   txtNome.style.color = "red" 
} else {
   txtNome.innerHTML = "NOME Válido"
   txtNome.style.color = "green"
   nomeOk = true
}
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail") 
 
    if (email.value.indexOf("@") == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = "E-MAIL inválido!"
       txtEmail.style.color = "red"
    } else {
       txtEmail.innerHTML = "E-MAIL válido!"
       txtEmail.style.color = "green"
       emailOk = true
    }
 }

 function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
 
    if (assunto.value.length > 100) {
       txtAssunto.innerHTML = "Digite no máximo 100 caracteres!"
       txtAssunto.style.color = "red"
       txtAssunto.style.display = "block"
    } else {
       txtAssunto.style.display = "none"
       assuntoOk = true
    }
 }
 
 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ("Formulário enviado com sucesso!")
    } else {
       alert ("Preencha o formulário corretamente antes de enviá-lo!")
    }
 }

 function videoZoom() {
    video.style.width = "800px"
    video.style.height = "600px"
 }
 
 function videoNormal() {
    video.style.width = "400px"
    video.style.height = "250px"
 }
