import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://fur-nest.vercel.app/api/v1",
});

export default apiClient;
