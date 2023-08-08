let RadioF=document.getElementById('RadioCs__F');
let RadioFC=document.getElementById('RadioF__C');
let RadioMP=document.getElementById('RadioM__P');
let RadioCF=document.getElementById('RadioC__F');
let Valor=document.getElementById('Valor');
let Mensaje=document.getElementById('Asignar');
let Resultado=document.getElementById('Resultado');
let Guardar=document.getElementById('Guardar');

RadioF.addEventListener('click', ()=> {
    Mensaje.innerText=('Ingresar Valor de °C:')
    Guardar.addEventListener('click', ()=>{
        CalculoC_a_F() 
    })

})
RadioFC.addEventListener('click', ()=> {
    Mensaje.innerText=('Ingresar Valor de °F:')
    Guardar.addEventListener('click', ()=>{
        CalculoF_a_C() 
    })
})
RadioMP.addEventListener('click', ()=> {
    Mensaje.innerText=('Ingresar Valor en M:')
    Guardar.addEventListener('click', ()=>{
        CalculoM_a_P() 
    })
})
RadioCF.addEventListener('click', ()=> {
    Mensaje.innerText=('Ingresar Valor de °C:')
    Guardar.addEventListener('click', ()=>{
        CalculoCen_a_F() 
    })
})

function CalculoF_a_C() {
    let Calcular=parseFloat((Valor.value - 32) * 5/9);
    Resultado.value= Calcular.toFixed(2) + " °C";
}
function CalculoM_a_P() {
    let Calcular=parseFloat(Valor.value / 0.3048);
    Resultado.value= Calcular.toFixed(2) + " Ft";
}
function CalculoCen_a_F() {
    let Calcular=parseFloat((Valor.value *9 / 5) + 32);
    Resultado.value= Calcular.toFixed(2) + " °F"; 
}
function CalculoC_a_F(){
    let Calcular=parseFloat(Valor.value * 1.8 + 32)
    Resultado.value=Calcular.toFixed(2) + " °C"
}