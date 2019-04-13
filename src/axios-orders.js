// file with instance of axios
import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-manager-app.firebaseio.com"
});

export default instance;
