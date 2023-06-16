function cadastroEvento(){
    let nomeEmail = document.getElementById("nomeEmail").value;
    let senha = document.getElementById("senha").value;
    let nomeEvento = document.getElementById("nomeEvento").value;
    let dataEvento = document.getElementById("data").value;
    let nMaxParticipantes = document.getElementById("nMax").value;
    let verificacao
    verificacao= nomeEmail && senha && nomeEvento && dataEvento && nMaxParticipantes
    verificacao==true


     if (verificacao==false){
    alert("Verifique se todos os campos estão preenchidos corretamente")
 }   else if (nMaxParticipantes<=0){
        alert("O número mínimo de participantes é de 1 pessoa")
        
    } else if(nMaxParticipantes>500){
        alert("O número máximo de participantes é de 500 pessoas")
    } else {
        alert("O evento foi cadastrado com sucesso!! Aproveite")
    
    } 
    
    
}
function login(){
    let nomeEmail = document.getElementById("nomeEmail").value;
    let nomeEmail2 = document.getElementById("nomeEmail").value;
    let senha = document.getElementById("senha").value;
    let verificacao
    let verificacaoEmail
    verificacao= nomeEmail && senha && nomeEvento && dataEvento && nMaxParticipantes
    verificacaoEmail= nomeEmail==nomeEmail2
    verificacao==true
    verificacaoEmail==false
    

    if (verificacao==false){
        alert("Verifique se todos os campos estão preenchidos corretamente")
     }  else if (verificacaoEmail==true){
        alert("O login foi realizado")
     }else {
        alert("Seu email está incorreto")
    
    } 



}


    
   


