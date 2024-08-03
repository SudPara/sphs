<script>
const queryParameters = Object.fromEntries(new URLSearchParams(window.location.search));

if (queryParameters["param1"].includes("@")) {
  document.getElementById("inputBoxParam1").value = queryParameters["param1"];
} else {
  console.log("No Param1 parameter found.");
}

if (queryParameters["param2"]) {
  document.getElementById("inputBoxParam2").value = queryParameters["param2"];
} else {
  console.log("No Param2 parameter found.");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6P29NNf1HBs6AEA160g__SOKjgm4jb4EDiesmeQxXtWYZhu92jt6P6lzGm-N0lsuO6Q/exec'; // Please set your Web Apps URL.

const data = new FormData();
Object.entries(queryParameters).forEach(e => data.append(...e));
fetch(scriptURL, { method: 'POST', body: data})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
</script>
