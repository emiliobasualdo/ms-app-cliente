import React, { memo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, StatusBar, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import Animated, { Easing } from 'react-native-reanimated';
import { gradientColorArray } from '@constants/colors';
import SliderCards, { CardProps } from '@screens/Home/components/SliderCards';
import paymentCard from '@app/assets/paymentCard.jpg';
import promoQuilmes from '@app/assets/promoQuilmes.jpg';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@constants/platform';
import MoneyInfo from '@screens/Home/components/MoneyInfo';
import { useFocusEffect } from '@react-navigation/native';
import ModalFilters from '@screens/Home/components/ModalFilters';
import AnimateTransactionList from '@screens/Home/components/AnimateTransactionList';
import { ShowAlertProps, withCustomAlert } from '@components/withCustomAlert';
import { ShowToastProps, withCustomToast } from '@components/withCustomToast';
import { ITransaction } from '@screens/Transactions/components/TrancationItem';
import { actionCreators as TransactionActions } from '@redux/home/actions';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import HomeHeader from './components/HomeHeader';
import styles from './styles';

const cards: Array<CardProps> = [
  {
    image: paymentCard
  },
  {
    image: promoQuilmes
  },
  {
    image: promoQuilmes
  }
];

function Home({
  navigation,
  dispatch,
  transactions
}: {
  dispatch: any;
  showToast: (showToast: ShowToastProps) => Promise<void>;
  showAlert: (showAlert: ShowAlertProps) => Promise<void>;
  transactions: Array<ITransaction>;
  navigation: any;
}) {
  // Uncomment to logout when API is ready
  const handleLogout = React.useCallback(() => dispatch(AuthActions.logout()), [dispatch]);

  const refScrollView = React.useRef(null);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const [isScrollEnabled, toggleScrollEnabled] = React.useState(false);
  const [showFilter, toggleFilter] = React.useState(false);

  /* *
   * Metodo para swichear la animacion
   * */
  const animateValue = React.useCallback(
    (toValue: number) => {
      Animated.timing(animatedValue, {
        toValue,
        duration: 400,
        easing: Easing.sin
      }).start(() => {
        // @ts-ignore
        refScrollView.current?.scrollTo({ y: 0, animated: true });
        toggleScrollEnabled(toValue === 1);
      });
    },
    [animatedValue]
  );

  /* *
   *  Metodo para deslizar la lista para arriba
   * */
  const handleUpGesture = (event: { nativeEvent: { state: number } }) => {
    if (event.nativeEvent.state === 5) {
      animateValue(1);
    }
  };

  /* *
   *  Hook de React Navigation para manejar el back button en android
   * */
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isScrollEnabled) {
          animateValue(0);
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isScrollEnabled, animateValue])
  );

  React.useEffect(() => {
    dispatch(TransactionActions.getTransactions());
    dispatch(TransactionActions.getHomeData());
  }, [dispatch]);

  return (
    <View style={[styles.container]}>
      {/**
       * StatusBar, cambia segun el estado de listado de movimientos
       */}
      <StatusBar barStyle={isScrollEnabled ? 'dark-content' : 'light-content'} />

      <View style={styles.aa}>
        <LinearGradient colors={gradientColorArray} style={styles.container}>
          <Animated.View
            style={[
              styles.ab,
              {
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 40]
                    })
                  }
                ]
              }
            ]}>
            {/**
             * Header
             */}
            <HomeHeader title={'Mi tarjeta'} username={'User Name'} onPress={handleLogout} />

            {/**
             * Informacion de saldo
             */}
            <MoneyInfo amount={2567.0} />
          </Animated.View>
          {/* <CustomButton onPress={handleLogout} green title="Logout!" style={styles.home} /> */}
        </LinearGradient>
      </View>
      <Animated.View
        style={[
          styles.ai,
          {
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -(WINDOW_HEIGHT * 0.4)]
                })
              }
            ]
          }
        ]}>
        <Animated.View
          style={{
            opacity: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0]
            }),
            transform: [
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, WINDOW_WIDTH]
                })
              }
            ]
          }}>
          {/**
           * Slider de promociones
           */}
          <SliderCards cards={cards} />
        </Animated.View>
        <AnimateTransactionList
          onSwipeUpGesture={handleUpGesture}
          animatedValue={animatedValue}
          onPressRightButton={() => toggleFilter(!showFilter)}
          onPressLeftButton={() => animateValue(0)}
          scrollEnabled={isScrollEnabled}
          refScroll={refScrollView}
          navigation={navigation}
          transactions={transactions}
          emptyMessage={'Tu tarjeta no tiene movimientos'}
        />
      </Animated.View>
      {/**
       * Modal de los filtros del listado de movimientos
       */}
      <ModalFilters
        visible={showFilter}
        onRequestClose={() => {
          toggleFilter(!showFilter);
        }}
      />
    </View>
  );
}

export default connect((state: State) => state.home)(memo(withCustomToast(withCustomAlert(Home))));
