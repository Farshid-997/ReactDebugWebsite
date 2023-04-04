import { toast } from 'react-toastify';

const hitToast = (variant, message) => {
  if (typeof variant !== 'string' || !['success', 'error'].includes(variant)) {
    console.error('Invalid variant argument:', variant);
    return;
  }
  toast[variant](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export default hitToast;