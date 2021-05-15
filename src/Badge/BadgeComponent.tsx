import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import {paddings, fonts} from '../styles/_base';

const BadgeComponent = ({user: {firstName, lastName, dateOfBirth, memberId}}) => {
  return (
    <View style={styles.container}>
      <Text>
        fullName:{' '}
        <Text style={styles.textValue}>{`${firstName} ${lastName}`}</Text>
      </Text>
      <Text>
        dateOfBirth: <Text style={styles.textValue}>{dateOfBirth}</Text>
      </Text>
      <Text>
        memberId: <Text style={styles.textValue}>{memberId}</Text>
      </Text>
      <QRCode value="https://globant.com" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: paddings.md,
  },
  textValue: {
    fontSize: fonts.lg,
  },
});

export default BadgeComponent;
