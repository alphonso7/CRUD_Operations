 const API_URL = "https://jsonplaceholder.typicode.com/todos";

 
 fetch(API_URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));


