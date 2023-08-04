import { toast } from "react-toastify";

export const defaultPropsToast = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}

export const toastSuccess = (message) => {
    return toast.success(message, {
        defaultPropsToast
    });
}

export const toastError = (message) => {
    return toast.error(message, {
        defaultPropsToast
    });
}