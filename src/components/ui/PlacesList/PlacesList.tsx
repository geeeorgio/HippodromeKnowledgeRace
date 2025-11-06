import React from 'react';
import { FlatList, View } from 'react-native';

import PlaceItem from '../PlaceItem/PlaceItem';

import { styles } from './styles';

import type { HistoryPlace } from 'src/constants';

interface PlacesListProps {
  places: HistoryPlace[];
  handlePress: (article: HistoryPlace) => void;
}

const PlacesList = ({ places, handlePress }: PlacesListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <PlaceItem place={item} handlePress={handlePress} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default PlacesList;
