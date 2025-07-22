import { Cliente } from "@/types/cliente";
import { api } from "./axios";
import { AxiosResponse } from "axios";

const URL: string = '/clientes';
export const useClienteService = {
    salvar: async (cliente:Cliente): Promise<Cliente> =>{
        const response:AxiosResponse<Cliente> = await api.post(URL, cliente);
        return response.data;
    },
    atualizar: async (id: number, Cliente:Cliente): Promise<void> =>{
        const response:AxiosResponse<Cliente> = await api.put(URL+`/${id}`, Cliente);
    },
    buscarTodos:  async () : Promise<Cliente[]> =>{
        const response:AxiosResponse<Cliente[]> = await api.get(URL);
        return response.data;
    },
    buscarPorId: async (id: string): Promise<Cliente> => {
        const response:AxiosResponse<Cliente> = await api.get(`${URL}/${id}`)
        return response.data;
    }
}