import { View, Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru', width: 30, height: 30}}
          className="bg-gray-300 p-4 rounded-full"
        />
      <View>
        <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
        <Text className="font-bold text-xl">Current Location</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
