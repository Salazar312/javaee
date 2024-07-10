/**
 * Confirmação de exclusão de um contato
 * @author Joas Almeida
 * @param idContato
 */

function confirmar(idContato){
	let resposta = confirm("Deseja Realmente Excluir Esse Contato ?")
	if(resposta === true){
		window.location.href = "delete?idContato=" + idContato
	}
}