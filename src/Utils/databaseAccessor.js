const API_BASE = "https://deen-developers-team4.herokuapp.com"

const getAllUsers = async () => {
  
    const users =  await fetch(`${API_BASE}/user`).then(
    (response) => response.json());

    console.log(users);

    return users;
};

const getAllCamps = async () => {
    const camps =  await fetch(`${API_BASE}/user`).then(
        (response) => response.json()
    );
    return camps;
}

const addUsers = async (users) => {
    const rawResponse = await fetch(`${API_BASE}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)
  });
  const content = await rawResponse.json();
  return content
}

export {getAllUsers, getAllCamps, addUsers};
