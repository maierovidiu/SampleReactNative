/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is the first card.',
    },
    {
      id: 2,
      title: 'Card 2',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is the second card.',
    },
  ];
  const cards2 = [
    {
      id: 3,
      title: 'Card 3',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is the third card.',
    },
    {
      id: 4,
      title: 'Card 3',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'This is the fourth card.',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      <Text style={styles.paragraph}>
        This app contains a variety of content. Scroll down to see images, text,
        and custom card components.
      </Text>
      {cards.map(card => (
        <View key={card.id} style={styles.card}>
          <Image source={{uri: card.imageUrl}} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      ))}
      <Image
        source={{uri: 'https://via.placeholder.com/400x200'}}
        style={styles.image}
      />
      {cards2.map(card => (
        <View key={card.id} style={styles.card}>
          <Image source={{uri: card.imageUrl}} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
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
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
export default App;
