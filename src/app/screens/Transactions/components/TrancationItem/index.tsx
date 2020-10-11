import React from 'react';
import { Image, View, Pressable, Animated } from 'react-native';
import icArrowUpLeftCircleBlue from '@app/assets/icArrowUpLeftCircleBlue.png';
import icArrowDownRigthCircleGreen from '@app/assets/icArrowDownRigthCircleGreen.png';
import CustomText from '@components/CustomText';

import { styles } from './styles';

export interface ITransaction {
  amount: number;
  type: 'IN' | 'OUT';
  date: string;
  commerce: string;
  extra: string;
  link?: string;
  status?: string;
  statusText?: string;
}

interface ITransactionItemProps extends ITransaction {
  onPress: () => any;
  index: number;
}

const TransactionItem = ({ amount, commerce, date, type, extra, index, onPress }: ITransactionItemProps) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 600,
      delay: index * 50,
      useNativeDriver: true
    }).start();
  });

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [500, 0]
            })
          }
        ]
      }}>
      <Pressable onPress={onPress}>
        <View style={styles.aa}>
          <View style={styles.ab}>
            <Image
              source={type === 'OUT' ? icArrowUpLeftCircleBlue : icArrowDownRigthCircleGreen}
              style={styles.ac}
            />
          </View>
          <View style={styles.ad}>
            <View style={styles.ae}>
              <CustomText small brandDarkBlue semiBold>
                $ {amount}
              </CustomText>
              <CustomText small brandDarkBlue semiBold>
                {type === 'IN' ? 'Ingreso' : 'Compra'}
              </CustomText>
            </View>
            <View style={styles.af}>
              <CustomText small style={styles.ag}>
                {commerce}
              </CustomText>
              <CustomText small style={styles.ag}>
                {date}
              </CustomText>
            </View>
            <View style={styles.ah}>
              <CustomText small style={styles.ag}>
                {extra}
              </CustomText>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default React.memo(TransactionItem);
