import { useState } from "react";

import { register as registerRequest } from "../../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const [isLoading, setIsLoading]=useState()
    const navigate = useNavigate();
    const register =async(firstName,lastName,userName,password)=>{
        setIsLoading(true);
        const response = await registerRequest({firstName,lastName,userName,password});
        setIsLoading(false);
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error en el registro'
            );
        }
        navigate('/auth');
        return toast.success('You have successfully registered')
    }

    return {
        isLoading,
        register
    }
}
