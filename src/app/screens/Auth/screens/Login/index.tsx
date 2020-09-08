/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import i18next from 'i18next';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { FIELDS, LOGIN_INITIAL_VALUES } from '@screens/Auth/constants';
import {
  validationsWrapper,
  validateRequired,
  validateOnlyNumber,
  validateMinLength
} from '@utils/validations/validateUtils';

import './i18n';
import styles from './styles';

function Login({ navigation }: Navigation) {
  // TODO: Cambiar handleLogin, agregar pegarle al endpoint y si da 200 redirigir al codeVerif sino a SignUp
  const handleLogin = () => navigation.navigate(Routes.SignUp);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.contentContainer}
      enableOnAndroid
      bounces={false}
      extraScrollHeight={60}
      keyboardShouldPersistTaps="always">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik onSubmit={handleLogin} initialValues={LOGIN_INITIAL_VALUES}>
          {({ handleSubmit, isValid }) => (
            <View style={styles.formContainer}>
              <View style={styles.mainContainer}>
                <CustomText brandGray semiBold>
                  Te enviaremos un código de verificación a este número
                </CustomText>
                <View style={styles.form}>
                  <CustomTextInputFormikField
                    center
                    disabled
                    keyboardType="numeric"
                    label={i18next.t('LOGIN:MAIL')}
                    name={FIELDS.prefix}
                    style={styles.prefixInput}
                    inputTextStyles={styles.inputTextStyle}
                    returnKeyType="next"
                  />
                  <CustomTextInputFormikField
                    maxLength={10}
                    label={i18next.t('LOGIN:PHONE_NUMBER')}
                    name={FIELDS.phoneNumber}
                    keyboardType="numeric"
                    validate={validationsWrapper([
                      validateRequired,
                      validateOnlyNumber,
                      validateMinLength(10)
                    ])}
                    style={styles.phoneNumberInput}
                    caretHidden
                    inputTextStyles={styles.inputTextStyle}
                    returnKeyType="go"
                  />
                </View>
                <CustomButton
                  onPress={handleLogin}
                  primary
                  semiBold
                  textStyle={styles.buttonText}
                  title={i18next.t('LOGIN:LOG_IN')}
                />
              </View>
            </View>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

export default Login;
