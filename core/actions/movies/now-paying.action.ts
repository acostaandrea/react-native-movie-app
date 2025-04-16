import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () =>{
    try {
        const {data} = await movieApi.get<MovieDBMoviesResponse>('/now_playing')
        // console.log(JSON.stringify(data,null,2));
        const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

        return movies;
        
    } catch (error) {
        console.log( error);
        throw 'Could not fetch now playing movies';
    }
} 