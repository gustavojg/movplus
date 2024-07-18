import React from "react";
import { FlatList, FlatListProps, ListRenderItem } from "react-native";
import FlatListItem from "../FlatListItem";
import { Text, View } from "@gluestack-ui/themed";

export interface FlatListItemProps {
  id: string;
  image: string;
  title: string;
}

interface FlatlistComponentProps {
  data;
  onPress: (id: string) => void;
}

const FlatlistComponent: React.FC<FlatlistComponentProps> = ({
  data,
  onPress,
  ...rest
}) => {
  const renderItem: ListRenderItem<FlatListItemProps> = ({ item }) => {
    return <FlatListItem onPress={onPress} {...item} />;
  };

  const ItemSeparator = () => (
    <View style={{ width: 10, backgroundColor: "transparent" }} />
  );

  return (
    <>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10, marginHorizontal:10 }}>
        {data.name}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator} // Añade esta línea
        {...rest}
      />
    </>
  );
};

export default FlatlistComponent;
