import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id:number | string): Promise<CompleteMovie> =>{
    try {
        const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`)	
        console.log('pelicula http cargado')
      

        return MovieMapper.fromTheMovieDbToCompleteMovie(data);
        
    } catch (error) {
        console.log( error);
        throw 'Could not fetch now playing movies';
    }
} 