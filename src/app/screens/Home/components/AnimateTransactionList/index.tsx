import React from 'react';
import { ScrollView } from 'react-native';
import { isAndroid, VIEWPORT_HEIGHT, WINDOW_HEIGHT } from '@constants/platform';
import CustomText from '@components/CustomText';
import TransactionItem, { ITransaction } from '@screens/Transactions/components/TrancationItem';
import Routes from '@constants/routes';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { MARGIN_SCALE, WIDTH_CARD } from '@screens/Home/components/SliderCards/styles';
import HeaderTransactionsList from '@screens/Home/components/HeaderTransactionsList';

import { styles } from './styles';

function TransactionsList(props: {
  scrollEnabled: boolean;
  refScroll: React.MutableRefObject<null>;
  navigation: any;
  emptyMessage?: string;
  transactions: Array<ITransaction>;
}) {
  const renderItem = (t: ITransaction, index: any) => {
    return (
      <TransactionItem
        {...t}
        key={index}
        index={index}
        onPress={() => {
          props.navigation.push(Routes.TransactionDetail, { transaction: t });
        }}
      />
    );
  };

  return (
    <ScrollView scrollEnabled={props.scrollEnabled} ref={props.refScroll} style={styles.ab}>
      <CustomText small brandDarkBlue semiBold style={styles.ac}>
        Últimos movimientos
      </CustomText>
      {props.transactions?.length > 0 ? (
        props.transactions.map(renderItem)
      ) : (
        <CustomText style={styles.ad}>
          {props.emptyMessage ? props.emptyMessage : 'Tu tarjeta no tiene movimientos'}
        </CustomText>
      )}
    </ScrollView>
  );
}

function AnimateTransactionList(props: {
  onSwipeUpGesture: (event: { nativeEvent: { state: State } }) => void;
  animatedValue: any;
  onPressRightButton: () => void;
  onPressLeftButton: () => void;
  scrollEnabled: boolean;
  refScroll: React.MutableRefObject<null>;
  navigation: any;
  transactions: Array<ITransaction>;
  emptyMessage?: string;
}) {
  return (
    <FlingGestureHandler
      direction={Directions.UP}
      onHandlerStateChange={e => {
        if (props.transactions?.length) {
          props.onSwipeUpGesture(e);
        }
      }}>
      <Animated.View
        style={[
          styles.ae,
          {
            transform: [
              {
                translateY: props.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    -40,
                    -(
                      WINDOW_HEIGHT * (isAndroid ? (VIEWPORT_HEIGHT < 497 ? 0.4 : 0.42) : 0.35) -
                      WIDTH_CARD -
                      MARGIN_SCALE
                    )
                  ]
                })
              }
            ]
          }
        ]}>
        <Animated.View
          style={[
            styles.aa,
            {
              opacity: props.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              }),
              transform: [
                {
                  translateY: props.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0]
                  })
                }
              ]
            }
          ]}>
          {/**
           * Header del listado de movientos
           */}
          <HeaderTransactionsList
            onPressRightButton={props.onPressRightButton}
            onPressLeftButton={props.onPressLeftButton}
          />
        </Animated.View>

        {/**
         * Listado de movimientos
         */}
        <TransactionsList
          transactions={props.transactions}
          scrollEnabled={props.scrollEnabled}
          refScroll={props.refScroll}
          navigation={props.navigation}
          emptyMessage={props.emptyMessage}
        />
      </Animated.View>
    </FlingGestureHandler>
  );
}

export default React.memo(AnimateTransactionList);
