import { RouteProp, NavigationProp, NavigationState } from '@react-navigation/native';
import { ITransaction } from '@screens/Transactions/components/TrancationItem';

export interface Navigation {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<Record<string, object | undefined>, string, NavigationState, {}, {}>;
}

export type StackParamList = {
  TransactionDetail: { transaction: ITransaction };
};
