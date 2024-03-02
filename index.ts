// Exemplo prático
function getUser(id: number) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err));
}

async function showName(id: number) {
    try {
        const user: any = await getUser(id);
        console.log(`O nome do usuário é: ${user.data.first_name}`);
    } catch(err) {
        console.log(err);
    }
}

showName(3);

