import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOtp = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email address');
    } else {
      // Assuming you have a function to send OTP to the user's email
      // Replace the following line with your actual OTP sending logic
      // sendOtpToEmail(email);
      Alert.alert('OTP Sent', `OTP has been sent to ${email}`);
    }
  };

  const handleLogin = () => {
    // Assuming you have a function to validate login credentials
    if (email.trim() === '' || password.trim() === '' || otp.trim() === '') {
      Alert.alert('Error', 'Please enter email, password, and OTP');
    } else {
      // Replace the following line with your actual login validation logic
      // validateLogin(email, password, otp);
      Alert.alert('Login Successful', 'You have successfully logged in!');
    }
  };

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()} className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/images/login.png')} style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} className="flex-1 bg-white px-8 pt-8">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text className="text-gray-700 ml-4">OTP</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
            placeholder="Enter your OTP"
            maxLength={6}
            value={otp}
            onChangeText={(text) => setOtp(text)}
          />
          <TouchableOpacity onPress={handleGetOtp} className="flex items-end">
            <Text className="text-gray-700 mb-5">Get OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">Login</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-2">Or</Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
