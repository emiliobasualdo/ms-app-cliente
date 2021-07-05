import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import Routes from '@constants/routes';
import { authStackNavConfig, appStackNavConfig, tabStackNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import VerificationCode from '@authScreens/VerificationCode';
import StepTwoSignUp from '@authScreens/SignUp/screens/StepTwo';
import SignUpSuccess from '@screens/Auth/screens/SignUp/screens/SignUpSuccess';
import Welcome from '@screens/Auth/screens/Login/screens/Welcome';
import OnBoarding from '@screens/OnBoarding';
import Home from '@screens/Home';
import QrCodeScanner from '@screens/QrCodeScanner';
import TransactionDetail from '@screens/Transactions/Detail';

const Stack = createStackNavigator();
// console.disableYellowBox = true;
const AuthStack = () => (
  <>
    {inferRoute(Stack)({ [Routes.Welcome]: Welcome })}
    {inferRoute(Stack)({ [Routes.Login]: Login })}
    {inferRoute(Stack)({ [Routes.OnBoarding]: OnBoarding })}
    {inferRoute(Stack)({ [Routes.SignUp]: SignUp })}
    {inferRoute(Stack)({ [Routes.StepTwo]: StepTwoSignUp })}
    {inferRoute(Stack)({ [Routes.SignUpSuccess]: SignUpSuccess })}
    {inferRoute(Stack)({ [Routes.VerificationCode]: VerificationCode })}
  </>
);

const Tab = createBottomTabNavigator();

const TabHomeStack = () => (
  <Stack.Navigator>
    {inferRoute(Stack)({ [Routes.Home]: Home })}
    {inferRoute(Stack)({ [Routes.TransactionDetail]: TransactionDetail })}
  </Stack.Navigator>
);

function TabNavigator() {
  return (
    <Tab.Navigator {...tabStackNavConfig}>{inferRoute(Tab)({ [Routes.Home]: TabHomeStack })}</Tab.Navigator>
  );
}

function AppStack() {
  return (
    <>
      {inferRoute(Stack)({ [Routes.StackHome]: TabNavigator })}
      {inferRoute(Stack)({ [Routes.QrCodeScanner]: QrCodeScanner })}
    </>
  );
}

const Navigator = () => {
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return <Stack.Navigator {...defaultStackConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};

export default Navigator;
