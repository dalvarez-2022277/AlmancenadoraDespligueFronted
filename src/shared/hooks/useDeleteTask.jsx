import { useState } from "react";
import toast from 'react-hot-toast'
import { deleteTask as deleteTaskRequest } from "../../services/api";

export const useDeleteTask = () => {
    const [isLoading, setIsLoading] = useState(false);

    const deleteTask = async (id) => {
        setIsLoading(true);
        const response = await deleteTaskRequest(id);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'An error occurred while deleting task'
            )
        }
        toast.success("Task deleted successfully")
        setIsLoading(false);

    }

    return {
        deleteTask,
        isLoading
    }
}