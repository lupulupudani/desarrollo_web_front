/*function t(x){return document.getElementById(x);} 
var lista=[]; 
function almacenar(){ 
    lista.push({n:t('nombre').value,a:t('anio').value}); 
    t('nombre').value=t('anio').value=''; 
} 
function mostrar(){ 
    t('e').innerHTML=''; 
for(var i=0,m;m=lista[i];i++) 
    t('e').innerHTML+=lista[i].n+'--'+lista[i].a+'<br />'; 

}*/
function t(x) { return document.getElementById(x); }
let listaReyes = ["Isabel", "Fernando", "Carlos", "Felipe", "Juana", "Alfonso", "Juan Carlos", "Amadeo", "Luis", "Jose"];
let lista = []

function almacenar() {
    //localStorage("lista")=JSON.stringify(lista)

    lista.push(document.getElementById('nombre').value)
    for(let l = 0; l <lista.length; i++)
    for (let i=0; i < listaReyes.length; i++){
        if(listaReyes[i] === lista[]){
            alert("as acertado")
        }else{alert("error")}
    }
    document.getElementById('nombre').value
}
function mostrar() {
    document.getElementById('elementos').innerHTML = ''
    for (var i = 0, m; m = lista[i]; i++){

        document.getElementById('elementos').innerHTML += lista[i].n +  '<br />'
}
}