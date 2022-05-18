function validarFormContacto(){
    // alert( rutValidation.validaRut( $('#txt-run').val().trim()) ? 'Valido' : 'inválido');

    var formValidated = true
    
    if (validateEmptyFieldsContacto()) {
      alert('existen campos vacíos, favor completar')
      formValidated=false
    }

    if(!rutValidation.validaRut($('#txt-run').val())){
      alert('El rut ingresado no es válido')
      formValidated=false
    }
         

    (formValidated) ? alert('Form Validado y sin problemas') : "";



}

function validarFormPedidos(){
    // alert( rutValidation.validaRut( $('#txt-run').val().trim()) ? 'Valido' : 'inválido');

    var formValidated = true
    
    if (validateEmptyFieldsPedidos()) {
      alert('existen campos vacíos o sin seleccionar, favor revisar.')
      formValidated=false
    }
         

    (formValidated) ? alert('Pedido realizado exitosamente. Gracias!') : "";



}

function validarFormSugerencias(){
    // alert( rutValidation.validaRut( $('#txt-run').val().trim()) ? 'Valido' : 'inválido');

    var formValidated = true
    
    if (validateEmptyFieldsContacto()) {
      alert('existen campos vacíos, favor completar')
      formValidated=false
    }

    if(!rutValidation.validaRut($('#txt-run').val())){
      alert('El rut ingresado no es válido')
      formValidated=false
    }
         

    (formValidated) ? alert('Form Validado y sin problemas') : "";



}

function validarFormAgendamiento(){
    // alert( rutValidation.validaRut( $('#txt-run').val().trim()) ? 'Valido' : 'inválido');

    var formValidated = true
    
    if (validateEmptyFieldsContacto()) {
      alert('existen campos vacíos, favor completar')
      formValidated=false
    }

    if(!rutValidation.validaRut($('#txt-run').val())){
      alert('El rut ingresado no es válido')
      formValidated=false
    }
         

    (formValidated) ? alert('Form Validado y sin problemas') : "";



}

function validateEmptyFieldsContacto(){

    var emptyFields = false;
    if($('#txt-run').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-nombres').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-apellido-paterno').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-apellido-materno').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-email').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-telefono').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-asunto').val() == '' ){
        emptyFields = true;
    } 

    return emptyFields
}

function validateEmptyFieldsPedidos(){

    var emptyFields = false;

    if($('#txt-nombre').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-apellido-paterno').val() == '' ){
        emptyFields = true;
    } 


    if($('#txt-email').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-telefono').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-direccion').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-productos').val() == '' ){
        emptyFields = true;
    } 

    if($('#txt-medio-pago').val() == '' ){
        emptyFields = true;
    } 

    return emptyFields
}

function validateNumberKey(evt){
    

//alert('entro fas')
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
        return true;
    } else if(code>=48 && code<=57) { // is a number.
        return true;
    } else{ // other keys.
        return false;
    }
}

var rutValidation = {
// Valida el rut con su cadena completa "XXXXXXXX-X"
validaRut : function (rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
    return false;
    var tmp 	= rutCompleto.split('-');
    var digv	= tmp[1]; 
    var rut 	= tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    return (rutValidation.dv(rut) == digv );
},
dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
}
}

