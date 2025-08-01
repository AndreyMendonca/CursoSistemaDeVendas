import axios, { AxiosInstance } from "axios";

export const api:AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});