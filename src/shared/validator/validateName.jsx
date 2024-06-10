export const validateName=(name)=>{
    return name.length>0 && name.length<=150
}

export const validateNameMessage='The name of the person in charge must be greater than 0 and less than 150 characters'