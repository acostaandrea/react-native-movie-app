import { View, Text } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { FlatList } from 'react-native-gesture-handler'
import { ActorCard } from './ActorCard'

interface Props{
    cast : Cast[]
}

const MovieCast = ({cast}:Props) => {
  return (
    <>  
    <Text className='font-bold mt-5 px-5 pb-4'>Actores</Text>
    <FlatList
    horizontal
    data={cast}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, i) => item.id.toString() + i.toString()}
    renderItem={({ item }) => (
      <ActorCard actor={item}/>
    )}    
  />
    </>
  )
}

export default MovieCast