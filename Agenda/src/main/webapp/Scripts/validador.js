/**
 * Validação de Formulario
 * @author Joas Almeida
 */

function validar(){
	let nome = document.forms["frmContato"].nome.value
	let fone = document.forms["frmContato"].fone.value
	if (nome === ""){
		alert("Preencha o Campo Nome")
		frmContato.nome.focus()
		return false
	} else if(fone === ""){
		alert("Preencha o Campo Fone")
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}