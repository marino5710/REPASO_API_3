const formulario = document.querySelector('form')
const tabla = document.querySelector('table')
const button = document.getElementById('buttonConsulta')

// async function consulta(){
    tabla.style.display = 'none'
const consultarPokemon = async (e) => {
    e.preventDefault();
    let nombrePokemon = formulario.pokemon.value;
    if(nombrePokemon == ''){
        alert("Debe ingregar el nombre del pokemon")
        return;
    }
    // console.log(nombrePokemon)
    // CONFIGURANDO LA PETICIÓN
    const url = `https://rickandmortyapi.com/api/character/?name=${nombrePokemon}&status=alive`
    const config = {
        method : 'GET'
    }
        // consulta a la API
        document.getElementById('estado').innerText = 'Buscando pokemon...'
        try {
            // CONSULTA A LA API
            const respuesta = await fetch(url, config);   
            if(respuesta.status === 0){

                estado.innerText = "no se encuentran personajes";
                
                const data = await respuesta.json()
                console.log(data); 
                console.log(data.results[0].name); 
                console.log(data.results[0].status); 
                console.log(data.results[0].gender); 
                console.log(data.results[0].image);
    
                document.getElementById('nombrePokemon').innerText = data.results[0].name
                document.getElementById('pesoPokemon').innerText = data.results[0].status
                document.getElementById('tipoPokemon').innerText = data.results[0].gender
                document.getElementById('imagenPokemon').src = data.results[0].image
                document.getElementById('estado').innerText = 'Pokemon encontrado'
                tabla.style.display = ''
            }else{
                // alert('error en la consulta')
                document.getElementById('estado').innerText = 'Pokemon no encontrado'
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const consultaAPI = async (e) => {
        const url = `./consulta.php`
        const config = {
            method : 'POST'
        }
    
        try {
            // CONSULTA A LA API
            const respuesta = await fetch(url, config);   
            
            const data = await respuesta.text()

            alert(data)
             
           
        } catch (error) {
            alert(error)
        }
    }
    
    
    formulario.addEventListener('submit', consultarPokemon )
    button.addEventListener('click', consultaAPI )