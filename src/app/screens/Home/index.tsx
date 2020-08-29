import React, { memo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColorArray } from '@constants/colors';
// import CustomButton from '@components/CustomButton';

import HomeHeader from './components/HomeHeader';
import styles from './styles';

function Home() {
  // Uncomment to logout when API is ready
  // const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);
  return (
    <LinearGradient colors={gradientColorArray} style={styles.container}>
      <HomeHeader />
      {/* <CustomButton onPress={handleLogout} green title="Logout!" style={styles.home} /> */}
    </LinearGradient>
  );
}

export default memo(Home);
