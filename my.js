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

const scriptURL = 'https://script.google.com/macros/s/AKfycby72R51PCV5pu-k9skq__ShMSez7bQfxZ5tpGk4T_0zTZZRgeJ2uXrCODg0LAenhQDiww/exec'; // Please set your Web Apps URL.

const data = new FormData();
Object.entries(queryParameters).forEach(e => data.append(...e));
fetch(scriptURL, { method: 'POST', body: data})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
</script>
