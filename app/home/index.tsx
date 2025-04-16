import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";


const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  if (nowPlayingQuery.isLoading)
    return (
      <View className="flex-1 items-center justify-center ">
        <ActivityIndicator color="purple" size={40}></ActivityIndicator>
      </View>
    );
  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Peliculas populares"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={topRatedQuery.data ?? []}
          title="Mejor calificadas"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title="Proximamente"
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
