window.FindIPAPI = function(apiUrl, onSuccess, onFailure) {
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var response = JSON.parse(xhr.responseText);
      
      // Se a resposta foi bem-sucedida, chamamos a função de sucesso
      if (xhr.status === 200 && response.status === "success") {
        onSuccess(response.data);
      } else {
        // Em caso de erro, chamamos a função de erro
        onFailure(response.status, response.message);
      }
    }
  };
  
  // Fazendo a requisição GET à API FindIP com o URL fornecido
  xhr.open("GET", apiUrl, true);
  xhr.send();
};
