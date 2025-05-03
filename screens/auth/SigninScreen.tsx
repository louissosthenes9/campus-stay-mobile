import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types/navigation';

export const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProps>();

  return (
    <View className="flex-1 bg-indigo-600">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="px-6 pt-6 pb-8">
          <Text className="text-white text-3xl font-bold">Welcome Back!</Text>
          <Text className="text-white text-base mt-2 opacity-80">Sign in to continue</Text>
        </View>

        {/* White curved container */}
        <View className="flex-1 bg-white rounded-t-[30px] px-6 pt-8">
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Form Fields */}
              <View className="mb-6">
                <Text className="text-gray-700 text-base mb-2 font-medium">Email</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
                  <Ionicons name="mail-outline" size={20} color="#6366f1" className="mr-2" />
                  <TextInput
                    className="flex-1 text-base ml-2"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-700 text-base mb-2 font-medium">Password</Text>
                <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
                  <Ionicons name="lock-closed-outline" size={20} color="#6366f1" className="mr-2" />
                  <TextInput
                    className="flex-1 text-base ml-2"
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons 
                      name={showPassword ? "eye-off-outline" : "eye-outline"} 
                      size={20} 
                      color="#6366f1" 
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot Password */}
              <TouchableOpacity className="self-end mb-8">
                <Text className="text-indigo-600 font-medium">Forgot Password?</Text>
              </TouchableOpacity>

              {/* Sign In Button */}
              <TouchableOpacity className="bg-indigo-600 py-4 rounded-xl">
                <Text className="text-white text-center text-lg font-semibold">Sign In</Text>
              </TouchableOpacity>

              {/* Sign Up Link */}
              <View className="flex-row justify-center mt-8 mb-6">
                <Text className="text-gray-500">Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text className="text-indigo-600 font-semibold">Sign Up</Text>
                </TouchableOpacity>
              </View>

              {/* Social Sign In */}
              <View className="mt-6">
                <View className="flex-row items-center mb-8">
                  <View className="flex-1 h-[1px] bg-gray-300" />
                  <Text className="mx-4 text-gray-500">Or sign in with</Text>
                  <View className="flex-1 h-[1px] bg-gray-300" />
                </View>

                <View className="flex-row justify-center space-x-6">
                  <TouchableOpacity className="w-14 h-14 rounded-full bg-gray-100 items-center justify-center">
                    <Ionicons name="logo-google" size={24} color="#DB4437" />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-14 h-14 rounded-full bg-gray-100 items-center justify-center">
                    <Ionicons name="logo-facebook" size={24} color="#4267B2" />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-14 h-14 rounded-full bg-gray-100 items-center justify-center">
                    <Ionicons name="logo-apple" size={24} color="#000000" />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </View>
  );
};
