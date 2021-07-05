import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
// import CustomButton from '@components/CustomButton';
import CustomModal from '@components/CustomModal';

import { FooterProps } from './interface';
// import { getScreensButtonsInfo } from './buttonsInfo';
import styles from './styles';

import '../../../../i18n';

function Footer(props: FooterProps) {
  // const navigation = useNavigation();
  // const { firstButton, secondButton } = getScreensButtonsInfo(props);
  const { screenIndex } = props;
  // const handleButton = () => navigation.navigate(Routes.Login);
  return (
    <View style={styles.buttons}>
      <CustomModal
        title={i18next.t(`ONBOARDING:TITLE_${screenIndex}`)}
        subtitle={i18next.t(`ONBOARDING:SUBTITLE_${screenIndex}`)}
        primaryActionTitle={i18next.t(`ONBOARDING:BUTTON_${screenIndex}`)}
        primaryAction={props.onSkip}
      />
      {/* {firstButton && <CustomButton {...firstButton} style={styles.buttonContainer} activeOpacity={0.7} />}
      {secondButton && <CustomButton {...secondButton} style={styles.buttonContainer} activeOpacity={0.7} />} */}
    </View>
  );
}

export default Footer;
