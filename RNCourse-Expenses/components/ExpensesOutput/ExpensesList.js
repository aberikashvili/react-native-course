import { FlatList, StyleSheet, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = ({ item }) => <ExpenseItem {...item} />;

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpensesList;
