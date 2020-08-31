import React from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18next from 'i18next';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import { isIos } from '@constants/platform';
// import { useAsyncRequest } from '@hooks/useRequest';
import { Navigation } from '@interfaces/navigation';
import { FIELDS, SIGNUP_INITIAL_VALUES_STEP_ONE } from '@screens/Auth/constants';
import { validationsWrapper, validateRequired, validateOnlyText } from '@utils/validations/validateUtils';
import Routes from '@constants/routes';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import './i18n';
import styles from './styles';

function SignUp({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const handleFormSubmit = (values: any) => {
    Keyboard.dismiss();
    dispatch(AuthActions.setUserName(values.name));
    dispatch(AuthActions.setUserSurname(values.surname));
    navigation.navigate(Routes.StepTwo);
  };
  return (
    <Formik onSubmit={handleFormSubmit} initialValues={SIGNUP_INITIAL_VALUES_STEP_ONE}>
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
                  {i18next.t('SIGNUP:TITLE')}
                </CustomText>
                <CustomTextInputFormikField
                  animated
                  inputTextStyles={styles.inputTextStyle}
                  style={styles.input}
                  secondary
                  label={i18next.t('SIGNUP:NAME')}
                  name={FIELDS.name}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                <CustomTextInputFormikField
                  secondary
                  animated
                  style={styles.input}
                  inputTextStyles={styles.inputTextStyle}
                  label={i18next.t('SIGNUP:SURNAME')}
                  name={FIELDS.surname}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                <CustomButton
                  primary
                  semiBold
                  textStyle={styles.buttonText}
                  onPress={handleSubmit}
                  style={styles.formButton}
                  title={i18next.t('SIGNUP:SIGN_UP')}
                  disabled={!isValid}
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
