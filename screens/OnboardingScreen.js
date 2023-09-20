import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from './../utils/asyncStorage';

const { width, height } = Dimensions.get("window")

export default function OnboardingScreen() {
  const navigation = useNavigation()

  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarded", "1")
  }

  // Custom Done Button
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        // DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#299378',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/animations/pizza.json')}
                  autoPlay loop
                />
              </View>
            ),
            title: 'Need Groceries Now?',
            subtitle: 'Select wide range of products from fresh fruits to delicious snacks',
          },
          {
            backgroundColor: '#e8bb37',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/animations/lemonade.json')}
                  autoPlay loop
                />
              </View>
            ),
            title: 'Hassle Free Payments',
            subtitle: 'Pay as per your convience, we accept all credit and debit cards',
          },
          {
            backgroundColor: '#e05e52',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/animations/coffee-maker.json')}
                  autoPlay loop
                />
              </View>
            ),
            title: 'Fast Doorstep Deliveries',
            subtitle: 'Our delivery executive will deliver your order in under 24 hours',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000"
  },
  lottie: {
    width: width * 0.9,
    height: width,
    marginVertical: -80
  },
  doneButton: {
    padding: 20,
  }
})