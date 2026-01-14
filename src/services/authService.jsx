import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app"; // URL backend

export const registerService = async (name, email, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/register`,
            { name, email, password },
        );

        return response.data;
    } catch (error) {
        throw error.response?.data || { msg: "Registrasi gagal" };
    }
};

export const loginService = async (email, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/login`,
            { email, password },
        );

        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error.response?.data || { msg: "Login gagal" };
    }
};

export const logoutService = async () => {
    try {
        const token = localStorage.getItem("token");

        await axios.post(`${API_URL}/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        throw {
            status: error.response?.status,
            msg: error.response?.data?.msg,
        };
    }
};