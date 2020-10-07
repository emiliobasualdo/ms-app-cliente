import CustomText from '@app/components/CustomText';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';
import { useDispatch, useSelector, connect } from 'react-redux';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { State } from '@interfaces/reduxInterfaces';
import withLoadable from '@components/Loadable';

import styles from './styles';

const CELL_COUNT = 4;

function VerificationCode({
  currentUserError,
  route: {
    params: { phoneNumber }
  }
}: any) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      dispatch(AuthActions.login({ code: value, phoneNumber }));
    }
  }, [value, dispatch, phoneNumber]);

  return (
    <View style={styles.container}>
      <CustomText center medium style={styles.message}>
        Inserte el código de verificacion que enviamos a {phoneNumber}
      </CustomText>

      {currentUserError ? (
        <View style={styles.aa}>
          <CustomText white>Codigo invalido</CustomText>
        </View>
      ) : null}

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View style={styles.cell}>
            <Text
              key={index}
              style={[styles.cellText, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default connect((state: State) => state.auth)(
  withLoadable(() => useSelector((state: State) => state.auth.currentUserLoading))(VerificationCode)
);
