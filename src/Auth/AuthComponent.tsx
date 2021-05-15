import React, {useContext, useState, FC} from 'react';
import {View, Button, TextInput} from 'react-native';
import {UserContext} from '../context';
import styles from './styles';
import AuthService from './AuthService';
import {UserBody, UserData} from './models';

const AuthComponent: FC = () => {
  const {setUserId, setToken} = useContext(UserContext);

  const [memberId, setMemberId] = useState<string>();
  const [password, setPassword] = useState<string>();

  const service = new AuthService();

  const signIn = async () => {
    const body: UserBody = {
      memberId,
      password,
    };

    try {
      const {userId, token} = (await service.post({
        body: JSON.stringify(body),
        errorText: 'Username or password are not valid',
      })) as UserData;

      setUserId(userId);
      setToken(token);
    } catch (err) {}
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
