import * as React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { View, FlatList, ActivityIndicator, TextInput } from 'react-native'
import { api } from '../../services/api'
import { ListItem } from './components/ListItem'
import { styles } from './styles'
import { CharacterProps } from '../../types/CharacterProps'

export function CharacterScreen() {
  const [characters, setCharacters] = useState<CharacterProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filterTextInput, setFilterTextInput] = useState<string>('')
  const [hasMoreData, setHasMoreData] = useState<boolean>(true)

  async function getCharacters() {
    if (isLoading) return
    try {
      if (!hasMoreData) return
      setIsLoading(true)
      const { data } = await api.get(`/character/?page=${currentPage}`)

      setCharacters(prev => [...prev, ...data.results])
      setIsLoading(false)
      if (data.info.next) {
        setCurrentPage(prev => prev + 1)
      } else {
        setHasMoreData(false)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const charactersFilter = useMemo(() => {
    return characters.filter(character => {
      return (
        character.name.toLowerCase().includes(filterTextInput.toLowerCase()) ||
        character.species
          .toLocaleLowerCase()
          .includes(filterTextInput.toLowerCase()) ||
        character.status
          .toLocaleLowerCase()
          .includes(filterTextInput.toLowerCase())
      )
    })
  }, [filterTextInput, characters])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Filtrar por nome, especie ou status"
        onChangeText={setFilterTextInput}
      />
      <FlatList
        data={charactersFilter}
        renderItem={({ item }) => ListItem(item)}
        keyExtractor={({ id }: CharacterProps, index) => String(id + index)}
        ListFooterComponent={<LoadingView loading={hasMoreData} />}
        onEndReached={getCharacters}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hasMoreData ? 40 : 10 }}
      />
    </View>
  )
}

type LoadingViewProps = {
  loading: boolean
}

function LoadingView({ loading }: LoadingViewProps) {
  if (loading) {
    return <ActivityIndicator size={'large'} color="#000" />
  }
  return null
}
