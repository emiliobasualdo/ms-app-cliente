import React from 'react';
import { Modal, Pressable } from 'react-native';
import { MARGIN } from '@constants/platform';
import { white } from '@constants/colors';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import Animated, { Easing } from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';

import { styles } from './styles';

export type ShowAlertProps = {
  title: string;
  message: string;
  buttonTitle: string;
};

type CustomAlertProps = {
  title: string;
  message: string;
  buttonTitle: string;
  onAction?: () => any;
  onDismiss?: () => any;
  visible: boolean;
};

const CustomAlert = ({ message, title, buttonTitle, onAction, onDismiss, visible }: CustomAlertProps) => {
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
        <BlurView
          style={styles.ab}
          overlayColor={'rgba(13,31,60,0.49)'}
          blurType="light"
          blurRadius={5}
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <Animated.View
          style={[
            styles.ac,
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-400, 0]
                  })
                }
              ]
            }
          ]}>
          <CustomText xbig semiBold>
            {title}
          </CustomText>
          <CustomText gray>{message}</CustomText>
          <CustomButton
            title={buttonTitle}
            primary
            textStyle={{ color: white }}
            bold
            onPress={() => {
              Animated.timing(animatedValue, {
                toValue: 0,
                duration: 400,
                easing: Easing.sin
              }).start(onAction);
            }}
            style={{ marginVertical: MARGIN }}
          />
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export const withCustomAlert = (WrappedComponent: any) => (props: any) => {
  const [show, toggleAlert] = React.useState(false);

  const [_message, setMessage] = React.useState('');
  const [_title, setTitle] = React.useState('');
  const [_buttonTitle, setButtonTitle] = React.useState('');

  const [action, setAction]: any = React.useState();

  const showAlert = ({ message, buttonTitle, title }: ShowAlertProps) => {
    return new Promise(resolve => {
      setAction(() => resolve);
      setMessage(message);
      setTitle(title);
      setButtonTitle(buttonTitle);
      toggleAlert(true);
    });
  };

  return (
    <>
      <WrappedComponent {...props} showAlert={showAlert} />
      <CustomAlert
        title={_title}
        message={_message}
        buttonTitle={_buttonTitle}
        visible={show}
        onDismiss={() => {
          toggleAlert(false);
        }}
        onAction={() => {
          action();
          toggleAlert(false);
        }}
      />
    </>
  );
};
