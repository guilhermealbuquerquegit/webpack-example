import cep from 'cep-promise';

document
	.getElementById('searchCep')
	.addEventListener('click', () => {

		let cepValue = document
			.getElementById('cepInput')
			.value; 


			cep(cepValue).then((data) => {
				document.querySelector('.city-result').innerHTML = data.city;
			}).catch((err) => {
				console.log(err);
			})
		});