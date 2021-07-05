import { Image, Pressable, View } from 'react-native';
import styles from '@screens/Home/styles';
import icBack from '@app/assets/icBack.png';
import CustomText from '@components/CustomText';
import icMenu from '@app/assets/icMenu.png';
import React from 'react';

function HeaderTransactionsList(props: { onPressLeftButton: () => void; onPressRightButton: () => void }) {
  return (
    <View style={styles.al}>
      <Pressable onPress={props.onPressLeftButton}>
        <Image source={icBack} style={styles.am} />
      </Pressable>
      <CustomText brandDarkBlue xbig semiBold>
        Movimientos
      </CustomText>
      <Pressable onPress={props.onPressRightButton}>
        <Image source={icMenu} style={styles.am} />
      </Pressable>
    </View>
  );
}

export default React.memo(HeaderTransactionsList);
