import React from 'react';
import { Image, Modal, View, Pressable, TouchableOpacity } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import icArrowUpLeftCircle from '@app/assets/icArrowUpLeftCircle.png';
import icCheckboxInactive from '@app/assets/icCheckboxInactive.png';
import icArrowDownRightCircle from '@app/assets/icArrowDownRightCircle.png';
import icCheckboxActive from '@app/assets/icCheckboxActive.png';

import { styles } from './styles';

function CustomCheckbox(props: { active: boolean; onChange: () => void; label: string; in: boolean }) {
  return (
    <TouchableOpacity onPress={props.onChange}>
      <View style={styles.aa}>
        <View style={styles.ab}>
          <Image source={props.in ? icArrowDownRightCircle : icArrowUpLeftCircle} />
        </View>
        <View style={styles.ac}>
          <CustomText xmedium semiBold brandDarkBlue>
            {props.label}
          </CustomText>
        </View>
        <View>
          {props.active ? (
            <View>
              <Image source={icCheckboxActive} />
            </View>
          ) : (
            <View>
              <Image source={icCheckboxInactive} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const ModalFilters = (props: {
  onRequestClose: ((data: { finished: boolean }) => any) | undefined;
  visible: boolean | undefined;
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.sin
    }).start();
  });

  const dismissFilterModal = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 400,
      easing: Easing.sin
    }).start(props.onRequestClose);
  };

  return (
    <Modal
      visible={props.visible}
      transparent
      statusBarTranslucent={true}
      animationType={'fade'}
      onRequestClose={dismissFilterModal}>
      <View style={styles.ad}>
        <BlurView
          style={styles.ae}
          overlayColor={'rgba(13, 31, 60, 0.49)'}
          blurType="light"
          blurRadius={5}
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <Pressable style={styles.af} onPress={dismissFilterModal} />

        <Animated.View
          style={[
            styles.ag,
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [420, 0]
                  })
                }
              ]
            }
          ]}>
          <View style={styles.ah}>
            <CustomText xmedium semiBold brandDarkBlue>
              Filtrar por
            </CustomText>
            <Pressable onPress={dismissFilterModal}>
              <CustomText xmedium blue semiBold>
                Ir
              </CustomText>
            </Pressable>
          </View>
          <View style={styles.ai}>
            <CustomButton title={'Todos'} radial blue semiBold style={styles.aj} />
            <CustomButton title={'Limpiar'} radial blue semiBold style={styles.ak} />
          </View>
          <View style={styles.al}>
            <CustomCheckbox
              active
              label={'Compra'}
              onChange={() => {
                console.warn('change');
              }}
            />
            <CustomCheckbox
              in
              label={'Ingreso'}
              onChange={() => {
                console.warn('change');
              }}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalFilters;
