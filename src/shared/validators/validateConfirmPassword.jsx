export const validateConfirmPassword=(password, confirmPassword)=>{
    return password===confirmPassword
}

export const validateConfirmPasswordMessage='Passwords do not match'