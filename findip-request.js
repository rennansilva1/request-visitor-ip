(function(apiKey, ipAddress) {
  const apiUrl = `https://api.findip.net/${ipAddress}/?token=${apiKey}`;

  // Fazendo a requisição à API FindIP
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Empurre os dados para o dataLayer ou manipule os dados como desejar
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'findip-api-success',
        ipAddress: data.ipAddress,
        country: data.country,
        city: data.city,
        region: data.subDivision,
        latitude: data.latitude,
        longitude: data.longitude,
        isp: data.isp,
        timezone: data.timeZone,
        connectionType: data.connectionType
      });
    })
    .catch(error => {
      // Em caso de erro, empurre o evento de erro para o dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'findip-api-error',
        errorCode: error.code,
        errorMessage: error.message
      });
    });
})(apiKeyFromGTM, ipAddressFromGTM);
