import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-Id.action";
import { useQuery } from "@tanstack/react-query";
import { getMovieCastAction } from '../../core/actions/movie/get-movie-cast.action';

export const useMovie = (id:number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: ()=> getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  const castQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours   
  });
  
  return {
    movieQuery,
    castQuery   
  };
};
