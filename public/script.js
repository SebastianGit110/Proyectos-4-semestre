// Realizar solicitud HTTP al servidor

function consultaDatosSqlNavegador (){
    axios.get('http://localhost:1337')
    .then(function (response) {
        console.log(response.data)
        // Manejar los datos recibidos
        const userList = document.getElementById('userList');
        response.data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.firstName}: ${user.lastName}`;
            userList.appendChild(listItem);
        });
    })
    .catch(function (error) {
        console.error('Error al obtener usuarios:', error);
    });
};