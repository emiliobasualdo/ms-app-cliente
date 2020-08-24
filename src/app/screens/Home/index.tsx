import React, { memo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '@components/CustomText';
import { gradientColorArray } from '@constants/colors';
// import { useDispatch } from 'react-redux';
// import CustomButton from '@components/CustomButton';
// import { actionCreators as AuthActions } from '@redux/auth/actions';

import HomeHeader from './components/HomeHeader';
import styles from './styles';

function Home() {
  // Uncomment to logout when API is ready
  // const dispatch = useDispatch();
  // const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);
  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <HomeHeader />
      {/* <CustomButton onPress={handleLogout} green title="Logout!" style={styles.home} /> */}
    </LinearGradient>
  );
}

export default memo(Home);
