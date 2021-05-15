import React, {useContext, useState, FC} from 'react';
import {View, Button, Alert, TextInput} from 'react-native';
import {UserContext} from '../context';
import styles from './styles';

const AuthComponent: FC = () => {
  const {setUserId, setToken} = useContext(UserContext);

  const [memberId, setMemberId] = useState<string>();
  const [password, setPassword] = useState<string>();

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

export default AuthComponent;
