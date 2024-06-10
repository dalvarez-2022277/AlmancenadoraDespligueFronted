export const validateDescription =(description)=>{
    return description.length>0 && description.length<=200
}

export const validateDescriptionMessage='The description must not be empty and must be less than 200 characters'