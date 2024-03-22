function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1'')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });
  }
  
  // Call the function
  fetchData()
    .then(data => {
      // Do something with the data
    })
    .catch(error => {
      // Handle errors
    });
  