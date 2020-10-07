import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import CustomText from '@components/CustomText';
import { white } from '@constants/colors';

const styles = StyleSheet.create({
  aa: {
    backgroundColor: white,
    flex: 1
  },
  ab: {
    flex: 1,
    alignItems: 'center'
  }
});

const CustomHeader = (props: { title: string }) => {
  return (
    <SafeAreaView style={styles.aa}>
      <View style={styles.ab}>
        <CustomText xbig semiBold brandDarkBlue>
          {props.title}
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
