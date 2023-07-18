<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tarea 5</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;,">
</head>
<body>
    <h1>api fetch y validacion php</h1>
    <form method="POST">
        <input type="text" name="pokemon" id="pokemon">
        <button type="submit">Consultar</button> 
        <button id="buttonConsulta" type="button">Consultar a PHP</button>
    </form>
    <br>
    <p id="estado"></p>
    <table>
        <thead>
            <tr>
                <th>DATO</th>
                <th>VALOR</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>NOMBRE</td>
                <td id="nombrePokemon"></td>
            </tr>
            <tr>
                <td>PESO</td>
                <td id="pesoPokemon"></td>
            </tr>
            <tr>
                <td>TIPO</td>
                <td id="tipoPokemon"></td>
            </tr>
            <tr>
                <td>IMAGEN</td>
                <td><img src="" alt="" id="imagenPokemon"></td>
            </tr>
        </tbody>
    </table>
    <script src="scripts.js"></script>
    
</body>
</html>