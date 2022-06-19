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

const getAllProvisions = async() => {
    const provisions =  await fetch("https://deen-developers-team4.herokuapp.com/provision").then(
        (response) => response.json()
    );
    return provisions;
}

const addProvisionToUser = async(jsonObj) => {
    const rawResponse = await fetch("https://deen-developers-team4.herokuapp.com/provision/add", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObj)
      });
      rawResponse.json().then(obj => {
          console.log(obj)
        const notifyJson = {
            "familyId": obj.userId,
            "provisionId": obj.provisionId,

        }
        addNotificationForPackage(notifyJson).then(notify => {
            console.log("done")
        })
    })
}

const addNotificationForPackage = async (theData) => {

    const rawResponse = await fetch("https://deen-developers-team4.herokuapp.com/notification", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(theData)
      });

      rawResponse.json().then(obj => {
        console.log("added notification", obj)
      }).catch(error => {
          console.log(error)
      })
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

export {getAllUsers, getAllCamps,getAllProvisions,addProvisionToUser, addUsers};
