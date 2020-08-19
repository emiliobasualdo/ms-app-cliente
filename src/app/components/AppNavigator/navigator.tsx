import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import Routes from '@constants/routes';
import { authStackNavConfig, appStackNavConfig, drawerStackNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import VerificationCode from '@authScreens/VerificationCode';
import StepTwoSignUp from '@authScreens/SignUp/screens/StepTwo';
import SignUpSuccess from '@screens/Auth/screens/SignUp/screens/SignUpSuccess';
import Welcome from '@screens/Auth/screens/Login/screens/Welcome';
import OnBoarding from '@screens/OnBoarding';
import Home from '@screens/Home';

const Stack = createStackNavigator();

const AuthStack = () => (
  <>
    {inferRoute(Stack)({ [Routes.Welcome]: Welcome })}
    {inferRoute(Stack)({ [Routes.OnBoarding]: OnBoarding })}
    {inferRoute(Stack)({ [Routes.Login]: Login })}
    {inferRoute(Stack)({ [Routes.SignUp]: SignUp })}
    {inferRoute(Stack)({ [Routes.StepTwo]: StepTwoSignUp })}
    {inferRoute(Stack)({ [Routes.SignUpSuccess]: SignUpSuccess })}
    {inferRoute(Stack)({ [Routes.VerificationCode]: VerificationCode })}
  </>
);

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator {...drawerStackNavConfig}>
      {inferRoute(Drawer)({ [Routes.Home]: Home })}
    </Drawer.Navigator>
  );
}

function AppStack() {
  return <>{inferRoute(Stack)({ [Routes.Home]: DrawerNavigator })}</>;
}

const Navigator = () => {
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const defaultStackConfig = currentUser ? appStackNavConfig : authStackNavConfig;
  return <Stack.Navigator {...defaultStackConfig}>{currentUser ? AppStack() : AuthStack()}</Stack.Navigator>;
};

export default Navigator;
