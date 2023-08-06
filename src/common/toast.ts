import { toast } from "react-toastify";

export const success = (message: string) => toast.success(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
})