import React from 'react';
import { View, ScrollView, ImageBackground, Image, Pressable, ImageSourcePropType } from 'react-native';
import { WINDOW_WIDTH } from '@constants/platform';
import paymentCard from '@app/assets/paymentCard.jpg';
import icPlusCircle from '@app/assets/icPlusCircle.png';
import CustomText from '@components/CustomText';

import styles, { MARGIN_SCALE, WIDTH_CARD } from './styles';

export interface CardProps {
  image?: ImageSourcePropType;
  last?: boolean;
  action?: () => any;
}

export interface SliderCardProps {
  cards: Array<CardProps>;
}

const MemoCard = React.memo(function Card(props: CardProps) {
  return (
    <Pressable onPress={props.action}>
      <View
        style={[
          styles.aa,
          // eslint-disable-next-line react-native/no-inline-styles
          { marginRight: props.last ? WINDOW_WIDTH - (WIDTH_CARD + MARGIN_SCALE) : 0 }
        ]}>
        <ImageBackground
          source={props.image || paymentCard}
          style={styles.ab}
          resizeMode={'cover'}
          imageStyle={styles.ac}>
          <View style={styles.ad}>
            <View style={styles.ae}>
              <Image source={icPlusCircle} />
            </View>
            <View style={styles.af}>
              <CustomText white medium bold>
                Carga tu tarjeta
              </CustomText>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
});

const SliderCards = (props: SliderCardProps) => {
  return (
    <View>
      <ScrollView
        horizontal
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH_CARD + MARGIN_SCALE}>
        {props.cards?.map((_, index) => {
          return <MemoCard key={index} last={index === props.cards.length - 1} {..._} />;
        })}
      </ScrollView>
    </View>
  );
};

export default SliderCards;
