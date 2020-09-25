import React from 'react';
import { SafeAreaView } from 'react-native';
import CustomText from '@components/CustomText';

import Avatar from '../Avatar';

import styles from './styles';

type Props = {
  title: string;
  username: string;
};

function HomeHeader(props: Props) {
  const { title, username } = props;
  return (
    <SafeAreaView style={styles.container}>
      <CustomText white xbig semiBold>
        {title}
      </CustomText>
      <Avatar name={username || ''} style={styles.avatar} />
    </SafeAreaView>
  );
}

export default HomeHeader;
