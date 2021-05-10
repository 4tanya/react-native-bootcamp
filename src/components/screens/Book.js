import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {colors} from '../_base';
import Book from '../Book';
import Loader from '../common/Loader';

const BookScreen = ({route}) => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  const getData = () => {
    setLoading(true);

    fetch(`https://acamicaexample.herokuapp.com/books/${route.params.id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => {
        Alert.alert('oh snap!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const {author, image, description, url} = book;

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <View style={styles.container}>
      <Book author={author} image={image} description={description} url={url} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default BookScreen;
