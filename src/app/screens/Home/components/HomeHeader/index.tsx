import React from 'react';
import { SafeAreaView, Pressable } from 'react-native';
import CustomText from '@components/CustomText';

import Avatar from '../Avatar';

import styles from './styles';

type Props = {
  title: string;
  username: string;
  onPress: () => any;
};

function HomeHeader(props: Props) {
  const { title, username } = props;
  return (
    <SafeAreaView style={styles.container}>
      <CustomText white xbig semiBold>
        {title}
      </CustomText>
      <Pressable onPress={props.onPress} style={styles.avatar}>
        <Avatar name={username || ''} />
      </Pressable>
    </SafeAreaView>
  );
}

export default HomeHeader;
