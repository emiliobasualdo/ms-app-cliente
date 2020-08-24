import React, { memo } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import { gradientColorArray } from '@constants/colors';
// import CustomButton from '@components/CustomButton';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import HomeHeader from './components/HomeHeader';
import styles from './styles';

function Home() {
  // Uncomment to logout when API is ready
  const dispatch = useDispatch();
  // const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);
  const handleTest = () => dispatch(AuthActions.login({ phoneNumber: '+35196707859', code: '1111' }));
  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <HomeHeader />
      <Button title="Login" onPress={handleTest} />
      {/* <CustomButton onPress={handleLogout} green title="Logout!" style={styles.home} /> */}
    </LinearGradient>
  );
}

export default memo(Home);
