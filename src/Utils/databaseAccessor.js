const getAllUsers = async () => {
  
    const users =  await fetch("https://deen-developers-team4.herokuapp.com/user").then(
    (response) => response.json());

    console.log(users);

    return users;
};

const getAllCamps = async () => {
    const camps =  await fetch("https://deen-developers-team4.herokuapp.com/user").then(
        (response) => response.json()
    );
    return camps;
}

export {getAllUsers, getAllCamps};
