export const validateLastName =(lastName)=>{
    return lastName.length>=1 && lastName.length<=100;
}

export const validateLastNameMessage='Last names must be between 2 and 100 characters'