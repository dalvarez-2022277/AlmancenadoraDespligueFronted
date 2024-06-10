import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const login = async (userName, password) => {
        setIsLoading(true);
        const response = await loginRequest({ userName, password });
        setIsLoading(false);

        if (response.error) {
            return toast.error(response.e?.response?.data.msg || response.e?.response?.data?.errors[0]?.msg || "Error trying to login, please try again");
        }

        const { token } = response.data;
        const { name } = response.data;

        console.log("Response Data: ", response.data);
        localStorage.setItem('user', JSON.stringify(token));
        localStorage.setItem('name', JSON.stringify(name));

        navigate("/taskBoard");
        return toast.success("Login successful")
        

    }

    return {
        login,
        isLoading
    }
}