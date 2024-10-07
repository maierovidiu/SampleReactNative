/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

function App(): React.JSX.Element {

  const data = [
    {
      id: '1',
      title: 'Card 1',
      image: 'https://via.placeholder.com/150',
      description: 'This is the first card.',
    },
    {
      id: '2',
      title: 'Card 2',
      image: 'https://via.placeholder.com/150',
      description: 'This is the second card.',
    },
    {
      id: '3',
      title: 'Card 3',
      image: 'https://via.placeholder.com/150',
      description: 'This is the third card.',
    },
    {
      id: '4',
      title: 'Card 4',
      image: 'https://via.placeholder.com/150',
      description: 'This is the fourth card.',
    },
    {
      id: '5',
      title: 'Card 5',
      image: 'https://via.placeholder.com/150',
      description: 'This is the fifth card.',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Horizontal Scrollable Cards</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    // paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contentContainer: {
    // paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    paddingTop: 0,
    height: 240,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    width: 150,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
export default App;
