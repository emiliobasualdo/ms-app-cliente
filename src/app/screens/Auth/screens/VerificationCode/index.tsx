import CustomText from '@app/components/CustomText';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';

import styles from './styles';

const CELL_COUNT = 4;

function VerificationCode() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });
  return (
    <View style={styles.container}>
      <CustomText center medium style={styles.message}>
        Inserte el código de verificacion que enviamos a +54 1122334455
      </CustomText>
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

export default VerificationCode;
