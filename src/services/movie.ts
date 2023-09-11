import { api } from "@/plugins/axios";
import type { getMovies } from "./models/getMovies";

class MovieService {

    async getListMovie() :Promise<getMovies>{
        const { data } = await api.get('trending/all/day?api_key=4affc3f6b42c3aa28eff8d94abd49359')
        return data
    }

}

export default new MovieService()