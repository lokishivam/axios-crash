/*
video sourse : https://youtu.be/6LyagkoRWYA

To make http requests we can use fetch api which is inbuilt in the browser.
we can also use axios library, which is easy to use.

*/

// GET REQUEST
function getTodos() {
  //will return a promise
  //   axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/todos",
  //   })
  //     .then((res) => showOutput(res))  //showOutput is a function to display things on ui
  //     .catch((err) => console.log(err));
  // }
  axios
    .get("https://jsonplaceholder.typicode.com/todos/?_limit=5")
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "reading books",
      completed: "false",
    })
    .then(function callback(res) {
      showOutput(res);
    });
}

// PUT/PATCH REQUEST
function updateTodo() {
  // axios //put replaces the object in the server with the the object we have sent
  //   .put("https://jsonplaceholder.typicode.com/todos/2", {
  //     title: "dancing",
  //     completed: true,
  //   })
  //   .then((res) => {
  //     showOutput(res);
  //   })
  //   .catch((err) => console.log(err));

  axios //patch will just update the object on the server
    .patch("https://jsonplaceholder.typicode.com/todos/2", {
      title: "dancing",
      completed: true,
    })
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/2")
    .then((res) => {
      showOutput(res);
    })
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  // axios
  //   .all([
  //     axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5"),
  //     axios.get("https://jsonplaceholder.typicode.com/posts/?_limit=5"),
  //   ])
  //   .then((res) => {
  //     showOutput(res[1]);
  //     console.log(res[0]);
  //   });

  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts/?_limit=5"),
    ])
    .then(
      axios.spread((todos, posts) => {
        showOutput(todos);
      })
    ); //then takes in a function, here we pass axios.spread() as a function to 'then'.
  //the axios.spread() inturn takes a function
}

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers");
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling");
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
