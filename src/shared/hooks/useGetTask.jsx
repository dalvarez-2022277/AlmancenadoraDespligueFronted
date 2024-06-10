import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks as getTasksRequest } from "../../services/api";
import toast from 'react-hot-toast'


export const useGetTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await getTasksRequest();
            if (response.error) {
                throw new Error(response.e?.response?.data || 'An error occurred while fetching tasks');
            }
            setTasks(Array.isArray(response.data) ? response.data : (response.data ? [response.data] : []));
        } catch (e) {
            setError(e);
            toast.error(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        tasks,
        getTasks,
        isLoading,
        error
    };
};