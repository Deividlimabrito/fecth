let generica;
fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa')
 .then(function(response){
    return response.json();
 })
.then(function (body){
    console.log("body",body);
    generica = body;
});
console.log('generica',generica);
