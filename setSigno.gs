function setSigno() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("All");
  var valoresColunaK = planilha.getRange("K2:K" + planilha.getLastRow()).getValues();
  var valoresColunaL = [];

  for (var i = 0; i < valoresColunaK.length; i++) {
    var data = valoresColunaK[i][0];

    if (data instanceof Date) {
      var signo = determinarSigno(data);
      valoresColunaL.push([signo]);
    } else {
      valoresColunaL.push([""]);
    }
  }

  planilha.getRange("L2:L" + (valoresColunaL.length + 1)).setValues(valoresColunaL); // Alterar a coluna quando for Executar e setar os valores
}

function determinarSigno(data) {
  var mes = data.getMonth() + 1;
  var dia = data.getDate();

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    return "Áries";
  } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
    return "Touro";
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    return "Gêmeos";
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    return "Câncer";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    return "Leão";
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    return "Virgem";
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    return "Libra";
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    return "Escorpião";
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    return "Sagitário";
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    return "Capricórnio";
  } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
    return "Aquário";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    return "Peixes";
  }

  // Se nenhum caso for correspondido, retorne vazio
  return "";
}
