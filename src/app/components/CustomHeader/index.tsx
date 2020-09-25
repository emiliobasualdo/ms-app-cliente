import React from 'react';
import { SafeAreaView, View } from 'react-native';
import CustomText from '@components/CustomText';
import {white} from "@constants/colors";

const CustomHeader = (props: { title: string }) => {
  return (
    <SafeAreaView style={{ backgroundColor: white, flex:1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <CustomText xbig semiBold brandDarkBlue>
          {props.title}
        </CustomText>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
