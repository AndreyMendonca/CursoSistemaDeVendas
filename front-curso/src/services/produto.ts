import { Produto } from "@/types/produto";
import { api } from "./axios";
import { AxiosResponse } from "axios";

const URL: string = '/produtos';
export const useProdutoService = {
    salvar: async (produto:Produto): Promise<Produto> =>{
        const response:AxiosResponse<Produto> = await api.post(URL, produto);
        return response.data;
    },
    atualizar: async (id: number, produto:Produto): Promise<void> =>{
        const response:AxiosResponse<Produto> = await api.put(URL+`/${id}`, produto);
    },
    buscarTodos:  async () : Promise<Produto[]> =>{
        const response:AxiosResponse<Produto[]> = await api.get(URL);
        return response.data;
    },
    buscarPorId: async (id: string): Promise<Produto> => {
        const response:AxiosResponse<Produto> = await api.get(`${URL}/${id}`)
        return response.data;
    }
}