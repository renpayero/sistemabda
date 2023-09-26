//necesito enviar un json con los datos del usuario

const form = document.getElementById("form");
const name = document.getElementById("username");
const email = document.getElementById("password");
const url = 'https://nodejs-mysql-restapi-production-ec23.up.railway.app/api/employees'

const sumbit = document.getElementById("submit");

sumbit.addEventListener('onclick', function(evento) {
	let user = {
		name: 'dako',
		salary: 50000
	}
	fetch(url, {
		mode: 'no-cors',
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	  })
	  .then(response => response.json())
	  .then(data => console.log(data))
	  .catch((error) => {
		console.error('Error:', error);
	});
})


form.addEventListener("submit", function(evento) {
	evento.preventDefault()
	
})