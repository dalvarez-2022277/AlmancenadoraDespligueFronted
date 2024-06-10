import { useState } from "react";
import { addTask as addTaskRequest } from "../../services/api";
import toast from 'react-hot-toast';
import {TaskBoardPage } from '../../pages/taskBoard/TaskBoardPage';
import { useNavigate } from "react-router-dom";

export const useAddTask = () => {
    const [isLoading, setIsLoading] = useState(false);
    const addTask = async (nameTask, description, dateEnd) => {
        setIsLoading(true);
        console.log("LocalStorage: "+localStorage.getItem('name'));
        let nameUser = JSON.parse(localStorage.getItem('name'));
        const response = await addTaskRequest({ nameTask, nameUser, description, dateEnd });
        toast.success("Task added successfully")
        setIsLoading(false);

        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'An error occurred while adding task'
            )
        }
    }

    return {
        addTask,
        isLoading
    }
}
