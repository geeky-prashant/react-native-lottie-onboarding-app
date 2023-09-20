import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get("window")

export default HomeScreen = () => {
  const navigation = useNavigation()

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding")
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.lottie}>
          <LottieView
            source={require('../assets/animations/check.json')}
            autoPlay loop
          />
        </View>
        <Text style={styles.text}>Hi, you have successfully Logged In</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddeed2"
  },
  lottie: {
    marginTop: 80,
    width: width * 0.6,
    height: width,
  },
  text: {
    marginTop: -50,
    fontSize: width * 0.048,
    fontWeight: "600",
    color: "#000000"
  },
  resetButton: {
    backgroundColor: "#086a79",
    color: "#fff",
    padding: 10,
    borderRadius: 100,
    marginTop: 30,
    width: width * 0.3,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500"
  }
})