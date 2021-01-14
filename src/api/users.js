export const getUsers = async () => {
    const response = await fetch('http://localhost:3001/users', {method: 'GET', 
    headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const users = await response.json()
    return users
}

export const getProjets = async () => {
    const response = await fetch('http://localhost:3001/projets', {method: 'GET', 
    headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const projets = await response.json()
    return projets
}

export const postProjet = async (projet) => {
    const response = await fetch('http://localhost:3001/projets', {method: 'POST', 
    headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
    body: JSON.stringify(projet)})
}