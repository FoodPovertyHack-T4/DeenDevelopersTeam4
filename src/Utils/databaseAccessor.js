const getAllUsers = async () => {
  
    const users =  await fetch("https://deen-developers-team4.herokuapp.com/user").then(
    (response) => response.json());

    console.log(users);

    return users;
};

export default getAllUsers;
