import { toast } from 'react-toastify';

const toastify = (store) => (next) => (action) => {
  console.log("action", action);
  if (action.type === "error" || action.type === 'api/callFailed')
    toast.error(action.payload.error);
  else return next(action);
};

export default toastify;
