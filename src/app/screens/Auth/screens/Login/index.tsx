/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector } from 'react-redux';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { State } from '@interfaces/reduxInterfaces';
// import { actionCreators as AuthActions } from '@redux/auth/actions';
import { FIELDS, LOGIN_INITIAL_VALUES } from '@screens/Auth/constants';
import { validateRequired } from '@utils/validations/validateUtils';

import './i18n';
import styles from './styles';

function Login({ navigation }: Navigation) {
  // const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>((state: State) => !!state.auth.currentUserError);
  // const handleLogin: (values: any) => void = useCallback(values => dispatch(AuthActions.login(values)), [
  //   dispatch
  // ]);
  const handleLogin = () => navigation.navigate(Routes.VerificationCode);

  // const handleGoToSignUp = () => navigation.navigate(Routes.SignUp);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
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
                  showError={hasLoginError}
                  style={styles.prefixInput}
                />
                <CustomTextInputFormikField
                  center
                  maxLength={10}
                  label={i18next.t('LOGIN:PHONE_NUMBER')}
                  name={FIELDS.password}
                  keyboardType="numeric"
                  showError={hasLoginError}
                  validate={validateRequired}
                  style={styles.phoneNumberInput}
                  placeholder={i18next.t('LOGIN:PHONE_NUMBER_PLACEHOLDER')}
                />
                {hasLoginError && (
                  <CustomText error center>
                    {i18next.t('LOGIN:LOGIN_FAILURE')}
                  </CustomText>
                )}
              </View>
              <CustomButton
                onPress={handleLogin}
                primary
                // style={styles.formButton}
                title={i18next.t('LOGIN:LOG_IN')}
                // disabled={hasLoginError || !isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </TouchableWithoutFeedback>
  );
}

export default Login;
