import React, {FC, useState, useEffect, useContext} from 'react';
import {View, Text, Alert} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {UserContext} from '../context';
import {Loader} from '../components';
import BadgeProps from './BadgeProps';
import styles from './styles';

const BadgeComponent: FC = () => {
  const {userId, token} = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>();
  const [user, setUser] = useState<BadgeProps>();

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
      <Text>
        Full Name:{' '}
        <Text
          style={
            styles.textValue
          }>{`${user?.firstName} ${user?.lastName}`}</Text>
      </Text>
      <Text>
        Date Of Birth: <Text style={styles.textValue}>{user?.dateOfBirth}</Text>
      </Text>
      <Text>
        Member Id: <Text style={styles.textValue}>{user?.memberId}</Text>
      </Text>
      <QRCode value="https://globant.com" />
    </View>
  );
};

export default BadgeComponent;
