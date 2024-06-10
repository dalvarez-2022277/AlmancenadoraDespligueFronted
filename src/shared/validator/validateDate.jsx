
export const validateDate =(date)=>{
    const regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    return regex.test(date)
}

export const validateDateMessage = 'The date entered is not valid';