export const getUsers = async () => {
    const response = await fetch('http://localhost:3001/users', {method: 'GET', 
    headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const users = await response.json()
    return users
}