export const validateFirstName =(firstName)=>{
    return firstName.length>=2 && firstName.length<=100;
}

export const validateFirstNameMessage='Last names must be between 2 and 100 characters'