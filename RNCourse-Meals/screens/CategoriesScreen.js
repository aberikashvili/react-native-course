import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (id, title, color) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: id });
    };

    return <CategoryGridTile title={title} color={color} onPress={pressHandler} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoryItem(item.id, item.title, item.color)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
