import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {photoList} from '../photos/photos';

export const ImageList = (props) => {
  let data = photoList;
  function fullImage(item) {
    let data = item;
    return (
      <View style={styles.imageFullScreen}>
        <Image source={{uri: data.photoUrl}} />
      </View>
    );
  }
  return (
    <View style={styles.imagesListContainer}>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.imageContainer}
              OnPress={fullImage(item)}>
              <Image style={styles.image} source={{uri: item.photoUrl}} />
              <View style={styles.photoInfo}>
                <Text style={styles.title}>Description: {item.title}</Text>
                <Text style={styles.author}>Author: {item.authorName}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

let styles = StyleSheet.create({
  imagesListContainer: {
    width: '100%',
    backgroundColor: '#3b3e3b',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#545f57',
    width: '98%',
    margin: 3,
  },
  image: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    width: '60%',
    fontSize: 15,
    alignSelf: 'flex-start',
  },
  photoInfo: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  author: {
    width: 100,
    alignSelf: 'flex-end',
  },
  imageFullScreen: {
    zIndex: 1000,
    height: '90%',
    width: '90%',
    alignSelf: 'center',
  },
});
