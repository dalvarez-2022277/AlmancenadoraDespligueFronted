import { useState } from "react";
import { updateTask as updateTaskRequest } from "../../services/api";
import toast from 'react-hot-toast'


export const useUpdateTask = () => {
    const [isLoading, setIsLoading] = useState(false);

    const updateTask = async (id) => {
        setIsLoading(true);
        const response = await updateTaskRequest(id);
        toast.success("Task updated successfully")
        setIsLoading(false);

        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'An error occurred while updating task'
            )
        }

    }

    return {
        updateTask,
        isLoading
    }
}