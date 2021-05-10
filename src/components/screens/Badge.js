import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {colors} from '../_base';
import Badge from '../Badge';
import Loader from '../common/Loader';
import {UserContext} from '../../../App';

const BadgeScreen = () => {
  const {userId, token} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const getData = () => {
    setLoading(true);

    fetch(`https://rn-bootcamp2021.mocklab.io/v1/members/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setUser(data))
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

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <View style={styles.container}>
      <Badge user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});

export default BadgeScreen;
