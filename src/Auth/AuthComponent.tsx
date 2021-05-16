import React, {useContext, FC, useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {UserContext} from '../context';
import styles from './styles';
import AuthService from './AuthService';
import {
  UserValues,
  UserData,
  FormFieldsName,
  FormFieldsPlaceholder,
  FormError,
} from './models';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

const AuthComponent: FC = () => {
  const {setUserId, setToken} = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<UserValues>();

  const [passHidden, setPassHidden] = useState<boolean>(true);

  const service = new AuthService();

  const signIn = async (body: UserValues) => {
    try {
      const {userId, token} = (await service.post({
        body: JSON.stringify(body),
        errorText: FormError.FORM,
      })) as UserData;

      setUserId(userId);
      setToken(token);
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <Ionicons name={'book-outline'} size={100} style={styles.logo} />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            keyboardType={'numeric'}
            maxLength={6}
            placeholder={FormFieldsPlaceholder.MEMBER_ID}
          />
        )}
        name={FormFieldsName.MEMBER_ID}
        rules={{required: true}}
        defaultValue={''}
      />
      {errors.memberId && (
        <Text style={styles.error}>{FormError.MEMBER_ID}</Text>
      )}

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.iconInput}
              onChangeText={onChange}
              value={value}
              secureTextEntry={passHidden}
              placeholder={FormFieldsPlaceholder.PASSWORD}
            />
            <TouchableOpacity
              onPress={() => setPassHidden(!passHidden)}
              style={styles.icon}>
              <Ionicons
                name={passHidden ? 'eye-off-outline' : 'eye-outline'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        )}
        name={FormFieldsName.PASSWORD}
        rules={{required: true}}
        defaultValue={''}
      />
      {errors.password && (
        <Text style={styles.error}>{FormError.PASSWORD}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(signIn)}>
        <Text style={styles.button}>{FormFieldsPlaceholder.BUTTON}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthComponent;
