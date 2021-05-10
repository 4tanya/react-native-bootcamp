import React, {useContext, useState} from 'react';
import {View, Button, Alert, TextInput, StyleSheet} from 'react-native';
import {UserContext} from '../../App';
import {paddings} from './_base';

const Auth = props => {
  const {setUserId, setToken} = useContext(UserContext);

  const [memberId, setMemberId] = useState(null);
  const [password, setPassword] = useState(null);

  const signIn = async () => {
    try {
      const rawResponse = await fetch(
        'https://rn-bootcamp2021.mocklab.io/v1/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memberId,
            password,
          }),
        },
      );

      if (!rawResponse.ok) {
        throw new Error();
      }

      const {userId, token} = await rawResponse.json();

      setUserId(userId);
      setToken(token);
    } catch (err) {
      Alert.alert('oh snap!', 'Username or password are not valid');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={memberId}
        onChangeText={setMemberId}
        keyboardType="numeric"
        maxLength={6}
        placeholder="Enter your member id"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: paddings.sm,
  },
});

export default Auth;
