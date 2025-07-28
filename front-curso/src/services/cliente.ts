import { Cliente } from "@/types/cliente";
import { api } from "./axios";
import { Axios, AxiosResponse } from "axios";
import { Page } from "@/types/page";

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
    },
    buscaPaginada: async (nome:string = '', cpf:string = '', page:number = 0, size:number = 10) : Promise<Page<Cliente>> => {
        const response:AxiosResponse<Page<Cliente>> = await api.get(URL+"/find", {
            params:{
                nome,
                cpf,
                page,
                size
            }
        });
        return response.data;
    }
}