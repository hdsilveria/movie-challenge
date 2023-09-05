import { api } from "@/plugins/axios";

class MovieService {

    async getListMovie() :Promise<any>{
        const { data } = await api.get('trending/all/day?api_key=4affc3f6b42c3aa28eff8d94abd49359')
        return data
    }

}

export default new MovieService()