import React from 'react';
import { Image, Modal, Pressable } from 'react-native';
import CustomText from '@components/CustomText';
import Animated, { Easing } from 'react-native-reanimated';
import icCross from '@app/assets/icCross.png';

import { styles } from './styles';

export type ShowToastProps = {
  message: string;
};

type CustomToastProps = {
  message: string;
  onDismiss?: () => any;
  visible: boolean;
};

const CustomToast = ({ message, onDismiss, visible }: CustomToastProps) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.sin
    }).start();
  });

  return (
    <Modal transparent visible={visible} statusBarTranslucent animated animationType={'fade'}>
      <Pressable
        onPress={() => {
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 400,
            easing: Easing.sin
          }).start(onDismiss);
        }}
        style={styles.aa}>
        <Animated.View
          style={[
            styles.ac,
            {
              opacity: animatedValue
            }
          ]}>
          <CustomText white semiBold style={styles.ad} center>
            {message}
          </CustomText>
          <Image source={icCross} />
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export const withCustomToast = (WrappedComponent: any) => (props: any) => {
  const [show, toggleAlert] = React.useState(false);

  const [_message, setMessage] = React.useState('');

  const [action, setAction]: any = React.useState();

  const showToast = ({ message }: ShowToastProps) => {
    return new Promise(resolve => {
      setAction(() => resolve);
      setMessage(message);
      toggleAlert(true);
    });
  };

  return (
    <>
      <WrappedComponent {...props} showToast={showToast} />
      <CustomToast
        message={_message}
        visible={show}
        onDismiss={() => {
          toggleAlert(false);
          action();
        }}
      />
    </>
  );
};
