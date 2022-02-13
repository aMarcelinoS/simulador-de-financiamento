
function simular(){
  var valorFinanciado = document.getElementById("valor").valueAsNumber;

  //Converte o prazo em anos para prazo em meses
  var prazo = document.getElementById("prazo");
  var prazoanos = prazo.valueAsNumber;
  var prazomeses = prazoanos * 12;

  var inputprazomeses = document.getElementById("prazo_mes")
  inputprazomeses.valueAsNumber = prazomeses;

  //Converte juros anuais em juros ao mês
  var inputjurosaoano = document.getElementById("taxaAnual");
  var jurosaoano = inputjurosaoano.valueAsNumber;
  var jurosaomes = (1 + jurosaoano) ** (1/12) - 1;

  document.getElementById("juros_mes").valueAsNumber = jurosaomes;

  //valor das parcelas de amortização do saldo principal
  var amortizacao = valorFinanciado / prazomeses;

  
  var jurostotal = 0;
  var tbody = document.querySelector("tbody")
  for(var i = 0; i < prazomeses; i++){

    //Calculos saldo devedor, prestação e juros totais
    var saldodevedor = valorFinanciado - amortizacao * i;
    var jurosprestacao = saldodevedor * jurosaomes;
    jurostotal = jurostotal + jurosprestacao;

    // Mostrar nos campos
    if(i < 5){
      var tr = tbody.children[i];
      var td1 = tr.children[1];
      td1.textContent = amortizacao.toFixed(2)

      var td2 = tr.children[2];
      td2.textContent = jurosprestacao.toFixed(2);

      var td3 = tr.children[3];
      td3.textContent = (jurosprestacao + amortizacao).toFixed(2);
    }

    document.getElementById("juros_total").valueAsNumber = jurostotal.toFixed(2);

  }
}