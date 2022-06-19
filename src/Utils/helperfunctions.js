const calculate_age = dob => {
    var birthDate = new Date(dob);
    var diff = Date.now() - birthDate.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
  }

export {calculate_age}
