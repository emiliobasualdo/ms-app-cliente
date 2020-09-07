import React from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard, TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import { isIos } from '@constants/platform';
import { Navigation } from '@interfaces/navigation';
import { FIELDS, SIGNUP_INITIAL_VALUES_STEP_TWO } from '@screens/Auth/constants';
import { validationsWrapper, validateRequired, validateOnlyNumber } from '@utils/validations/validateUtils';
import Routes from '@constants/routes';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import '../../i18n';
import styles from './styles';

function StepTwo({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const handleFormSubmit = (values: any) => {
    Keyboard.dismiss();
    dispatch(AuthActions.setUserDNI(values.dni));
    dispatch(AuthActions.setUserDateOfBrith(values.birthDate));
    navigation.navigate(Routes.SignUpSuccess);
  };
  return (
    <Formik onSubmit={handleFormSubmit} initialValues={SIGNUP_INITIAL_VALUES_STEP_TWO}>
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
                <CustomTextInputFormikField
                  animated
                  secondary
                  label={i18next.t('SIGNUP:DNI')}
                  name={FIELDS.dni}
                  inputTextStyles={styles.inputTextStyle}
                  validate={validationsWrapper([validateRequired])}
                />
                {/* TODO: Agregar validaciones y formatting.*/}
                <CustomTextInputFormikField
                  secondary
                  animated
                  label={i18next.t('SIGNUP:BIRTH_DATE')}
                  name={FIELDS.birthDate}
                  inputTextStyles={styles.inputTextStyle}
                  validate={validationsWrapper([validateRequired])}
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

export default StepTwo;
