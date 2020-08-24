/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import { isIos } from '@constants/platform';
import { useAsyncRequest } from '@hooks/useRequest';
import { Navigation } from '@interfaces/navigation';
import { FIELDS, SIGNUP_INITIAL_VALUES } from '@screens/Auth/constants';
import * as AuthService from '@services/AuthService';
import { validationsWrapper, validateRequired, validateOnlyText } from '@utils/validations/validateUtils';
import Routes from '@constants/routes';

import '../../i18n';
import styles from './styles';

function SignUp({ navigation }: Navigation) {
  const [, , error, signUp] = useAsyncRequest({
    request: AuthService.signup,
    withPostSuccess: () => navigation.navigate(Routes.StepTwo)
  });
  const hasSignUpError = !!error;
  const handleSignUp = useCallback(
    values => {
      Keyboard.dismiss();
      signUp(values);
    },
    [signUp]
  );
  const handleNext = () => navigation.navigate(Routes.SignUpSuccess);
  return (
    <Formik onSubmit={handleSignUp} initialValues={SIGNUP_INITIAL_VALUES}>
      {({ handleSubmit, isValid }) => (
        <>
          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={styles.stretchAndFlex}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[styles.stretchAndFlex, styles.form]}>
              <View style={styles.inputsContainer}>
                <CustomText medium brandGray>
                  {i18next.t('SIGNUP:TITLE_STEP_TWO')}
                </CustomText>
                {
                  // TODO: Matt no te olvides de los validates y los fields
                }
                <CustomTextInputFormikField
                  animated
                  secondary
                  label={i18next.t('SIGNUP:DNI')}
                  name={FIELDS.name}
                  showError={hasSignUpError}
                  inputTextStyles={styles.inputTextStyle}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                <CustomTextInputFormikField
                  secondary
                  animated
                  label={i18next.t('SIGNUP:BIRTH_DATE')}
                  name={FIELDS.surname}
                  showError={hasSignUpError}
                  inputTextStyles={styles.inputTextStyle}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                {hasSignUpError && (
                  <CustomText error center>
                    {i18next.t('SIGNUP:SIGNUP_FAILURE')}
                  </CustomText>
                )}
                <CustomButton
                  primary
                  semiBold
                  textStyle={styles.buttonText}
                  onPress={handleNext}
                  style={styles.formButton}
                  title={i18next.t('SIGNUP:SIGN_UP')}
                  disabled={hasSignUpError || !isValid}
                />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
          {isIos && <KeyboardSpacer />}
        </>
      )}
    </Formik>
  );
}

export default SignUp;
