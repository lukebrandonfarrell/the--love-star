import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../components/styles/onboarding-four-style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingFourPage = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Finished!',
    });
  }, []);
  useEffect(onSaveHasOnboarded, []);

  return (
    <ScrollView style={styles.backgroundOnboarding}>
      <View style={styles.onboardingContainer}>
        <AntDesign name="checkcircle" size={74.4} color="rgb(221, 244, 244)" />
        <Text style={styles.mainText}>Your account has now been created!</Text>
        <Text style={styles.subText}>
          Congratulations! Press next to see your profile and upload an image!
        </Text>
        <Image
          source={require('../img/elephant.png')}
          style={styles.chatImage}
        />
        <TouchableOpacity onPress={() => navigation.navigate('DashboardPage')}>
          <View>
            <Text style={styles.bottomText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  function onSaveHasOnboarded(){
    AsyncStorage.setItem('@has-onboarded', 'true');
  }
};

export default OnboardingFourPage;
