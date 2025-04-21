import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-Id.action";
import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-2xl mb-4">Espere...</Text>
        <ActivityIndicator color="purple" size={30}/>
      </View>
    );
  }
  return (
    <ScrollView>
      <MovieHeader originalTitle={movieQuery.data.originalTitle} poster={movieQuery.data.poster} title={movieQuery.data.title}/>
      <MovieDescription movie={movieQuery.data}></MovieDescription>
    </ScrollView>
)
};

export default MovieScreen;
