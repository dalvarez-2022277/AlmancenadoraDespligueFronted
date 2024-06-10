export const validateState=(state)=>{
    return state!=true && state!=false 
}

export const validateStateMessage = 'The status must be finalized or not finalized'