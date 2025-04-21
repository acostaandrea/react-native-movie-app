import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/credits-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieCastAction = async (id: number | string): Promise<Cast[]> => {
    try {
        const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`)



        return data.cast.map(CastMapper.fromMovieDBCastToEntity);

    } catch (error) {
        console.log(error);
        throw 'Could not fetch now playing movies';
    }
} 