import { Produto } from "@/types/produto";
import { api } from "./axios";
import { AxiosResponse } from "axios";

const URL: string = '/produtos';
export const useProdutoService  = () => {
    const salvar = async (produto:Produto): Promise<Produto> =>{
        const response:AxiosResponse<Produto> = await api.post(URL, produto);
        return response.data;
    }
}