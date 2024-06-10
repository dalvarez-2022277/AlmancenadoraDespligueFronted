import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://almacenadora1.vercel.app/almacenadora/v1',
    timeout: 1000
})


export const addTask = async ({ nameTask, nameUser, description, dateEnd}) => {
    try {
        return await apiClient.post('/to-do/createToDo', { nameTask, dateEnd, nameUser, description}, { headers: { "Authorization": `Bearer ${localStorage.getItem('user')}` } });
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const getTasks = async () => {
    try {
        return await apiClient.get('/to-do/viewToDo');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteTask = async (id) => {
    try {
        return await apiClient.delete(`/to-do/deleteToDo/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updateTask = async (id) => {
    try {
        return await apiClient.put(`/to-do/updateToDo/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const login = async (data) => {
    console.log("data", data);
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register=async (data)=>{
    try {
        return await apiClient.post('/users',data)
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}