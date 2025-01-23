// fetch("http://localhost:3000/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ title: "fourth Post", author: "Jan Will" }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));





// fetch("http://localhost:3000/posts/3", {
//   method: "DELETE"
// })
//   .then(response => response.json())
//   .then(data => console.log("Deleted:", data))
//   .catch(error => console.error("Error:", error));

// curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Post", "author": "Jane Doe"}' http://localhost:3000/posts/1


// fetch('http://localhost:3000/books', {
//   method: 'GET'
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


  // function updateItem(id, updatedItem) {
  //   fetch(`http://localhost:3000/posts/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedItem)
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log('Item updated:', data))
  //   .catch(error => console.error('Error:', error));
  // }
  
  // updateItem(1, { name: 'Updated Item', description: 'This is an updated item' });
  
