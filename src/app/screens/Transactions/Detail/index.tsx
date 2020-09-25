import React from 'react';
import { Image, ScrollView, StatusBar, View, Pressable, Linking } from 'react-native';
import CustomText from '@components/CustomText';
import icArrowCompras from '@app/assets/icArrowCompras.png';
import icArrowIngresos from '@app/assets/icArrowIngresos.png';
import icExternalLink from '@app/assets/icExternalLink.png';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from '@interfaces/navigation';
import { blue } from '@constants/colors';

import { styles } from './styles';

type DetailRowProps = {
  title: string;
  subtitle: string;
  isLink?: boolean;
  link?: string;
};

function openLink(link: string) {
  Linking.canOpenURL(link).then(res => {
    if (res) {
      Linking.openURL(link);
    }
  });
}

function DetailRow({ title, subtitle, isLink, link }: DetailRowProps) {
  return (
    <View style={styles.aa}>
      <CustomText brandGray semiBold small>
        {title}
      </CustomText>
      <Pressable
        style={styles.ah}
        onPress={() => {
          if (link) {
            openLink(link);
          }
        }}>
        <CustomText brandDarkBlue xmedium style={link ? { color: blue } : {}}>
          {subtitle}
        </CustomText>
        {link ? <Image source={icExternalLink} style={styles.ai} /> : null}
      </Pressable>
    </View>
  );
}

type TransactionDetailProps = {
  route: RouteProp<StackParamList, 'TransactionDetail'>;
};

const TransactionDetail = ({
  route: {
    params: {
      transaction: { amount, commerce, date, type, link, statusText }
    }
  }
}: TransactionDetailProps) => {
  return (
    <ScrollView style={styles.ab}>
      <StatusBar barStyle={'dark-content'} />
      <CustomText small brandDarkBlue semiBold style={styles.ac}>
        Detalle de operación
      </CustomText>
      <View style={styles.ad}>
        <Image source={type === 'IN' ? icArrowIngresos : icArrowCompras} />
        <CustomText semiBold brandDarkBlue xmedium>
          {type === 'IN' ? 'Ingreso' : 'Compra'}
        </CustomText>
      </View>
      <View style={styles.ae}>
        <View style={styles.af}>
          <CustomText brandGray semiBold small>
            Fecha
          </CustomText>
          <CustomText brandDarkBlue xmedium>
            {date}
          </CustomText>
        </View>
        <View style={styles.ag}>
          <CustomText brandGray semiBold small>
            Hora
          </CustomText>
          <CustomText brandDarkBlue xmedium>
            10:25 AM
          </CustomText>
        </View>
      </View>
      <DetailRow title={'Monto total'} subtitle={`$ ${amount}`} />
      <DetailRow title={'Ahorro'} subtitle={'+$50.00'} />
      <DetailRow title={'Comercio'} subtitle={commerce} />
      <DetailRow title={'Estado'} subtitle={statusText!} link={link} />
    </ScrollView>
  );
};

export default TransactionDetail;
