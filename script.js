function contar(){

let inicio = Number(document.getElementById('inicio').value)
let fim = Number(document.getElementById('fim').value)
let passo = Number(document.getElementById('passo').value)
let res = document.getElementById('msg')


if(inicio == 0 || fim == 0 || passo == 0){
    window.alert('[ERRO] Put some Values')
} else{

 if(inicio < fim){
    
    for(let c = inicio ; c <= fim ; c += passo){

    res.innerHTML += `${c} | `
 } 
} else if (inicio > fim){

    for(let c = inicio ; c >= fim ; c -= passo){

        res.innerHTML += `${c} | `


}

} else{

    let texto = 'The beginning must be different than the end.'
    let texto_negrito = texto.bold().italics()
    res.innerHTML = texto_negrito
}




}

}