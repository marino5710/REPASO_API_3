const formulario = document.querySelector('form');
const tabla = document.querySelector('table');
const button = document.getElementById('buttonConsulta');

const consultarPokemon = async (e) => {
  e.preventDefault();
  let nombrePokemon = formulario.pokemon.value;
  if (nombrePokemon == '') {
    alert("Debe ingresar el nombre del pokemon");
    return;
  }
  
  const url = `https://rickandmortyapi.com/api/character/?name=${nombrePokemon}&status=alive`;
  const config = {
    method: 'GET'
  };

  document.getElementById('estado').innerText = 'Buscando personaje...';
  
  try {
    const respuesta = await fetch(url, config);
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      console.log(data);
      console.log(data.results[0].name);
      console.log(data.results[0].status);
      console.log(data.results[0].gender);
      console.log(data.results[0].image);

      document.getElementById('nombreMorty').innerText = data.results[0].name;
      document.getElementById('pesoMorty').innerText = data.results[0].status;
      document.getElementById('tipoMorty').innerText = data.results[0].gender;
      document.getElementById('imagenMorty').src = data.results[0].image;
      document.getElementById('estado').innerText = 'Pokemon encontrado';
      tabla.style.display = '';
    } else {
      document.getElementById('estado').innerText = 'Pokemon no encontrado';
    }
  } catch (error) {
    console.log(error);
  }
};

const consultaAPI = async (e) => {
  const url = `./consulta.php`;
  const config = {
    method: 'POST'
  };

  try {
    const respuesta = await fetch(url, config);
    const data = await respuesta.text();
    alert(data);
  } catch (error) {
    alert(error);
  }
};

formulario.addEventListener('submit', consultarPokemon);
button.addEventListener('click', consultaAPI);
