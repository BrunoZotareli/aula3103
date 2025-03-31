function expressao(parametro){
  document.getElementById('display-calculadora').value +=parametro;


}

function calcular (){
    try{

        let resultado = eval(document.getElementById('display-calculadora').value);
        document.getElementById('display-calculadora').value= resultado;

    }catch(error){

        document.getElementById('display-calculadora').value= "expressao incorreta";
    }
 }
        function limpar(){
        document.getElementById('display-calculadora').value= "";
}