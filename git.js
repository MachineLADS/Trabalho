
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userIdName').value; 
    const resultadoDiv = document.getElementById('resultado');
    
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(user => {
            resultadoDiv.innerText = 'Nome: ' + user.name;
        })
        .catch(error => {
            resultadoDiv.innerText = 'Erro ao buscar o usuário. Tente novamente.';
            console.error('Erro:', error);
        });
});

document.getElementById('userEmailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userIdEmail').value; 
    const resultadoDiv = document.getElementById('Resposta');
    
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(user => {
            resultadoDiv.innerText = 'Email: ' + user.email;
        })
        .catch(error => {
            resultadoDiv.innerText = 'Erro ao buscar o usuário. Tente novamente.';
            console.error('Erro:', error);
        });
});


document.getElementById('userAddressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userId = document.getElementById('userIdAddress').value;
    const resultadoDiv = document.getElementById('Retorno');
    
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(user => {
            const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
            resultadoDiv.innerText = 'Endereço: ' + address;
        })
        .catch(error => {
            resultadoDiv.innerText = 'Erro ao buscar o usuário. Tente novamente.';
            console.error('Erro:', error);
        });
});