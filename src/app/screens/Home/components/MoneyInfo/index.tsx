import { Image, View } from 'react-native';
import styles from '@screens/Home/styles';
import icCreditCard from '@app/assets/icCreditCard.png';
import CustomText from '@components/CustomText';
import icArrowUp from '@app/assets/icArrowUp.png';
import React from 'react';

type Props = {
  amount: number;
};

function MoneyInfo(props: Props) {
  const { amount } = props;
  return (
    <View style={styles.ac}>
      <View style={styles.ad}>
        <Image source={icCreditCard} style={styles.ae} />
        <CustomText xlarge white bold>
          $ {amount}
        </CustomText>
      </View>
      <View style={styles.af}>
        <CustomText medium bold center style={styles.ag}>
          +157.49
        </CustomText>
        <CustomText medium style={styles.ah}>
          3.45
        </CustomText>
        <Image source={icArrowUp} style={styles.aj} resizeMode={'contain'} />
      </View>
    </View>
  );
}

export default React.memo(MoneyInfo);
