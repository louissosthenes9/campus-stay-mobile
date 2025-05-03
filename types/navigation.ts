import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Signin: undefined;
  Signup: undefined;
  Home: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  Favourites: undefined;
  Explore: undefined;
  Settings: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
