export const validateNameTask=(nameTask)=>{
    return nameTask.length>=5 && nameTask.length<=50
}

export const validateNameTaskMessage ='The task name must be between 5 and 50 characters'