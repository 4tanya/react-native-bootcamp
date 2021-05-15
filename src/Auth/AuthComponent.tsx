import React, {useContext, FC} from 'react';
import {View, Button, TextInput, Text} from 'react-native';
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

const AuthComponent: FC = () => {
  const {setUserId, setToken} = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

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
    <View>
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
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder={FormFieldsPlaceholder.PASSWORD}
          />
        )}
        name={FormFieldsName.PASSWORD}
        rules={{required: true}}
        defaultValue={''}
      />
      {errors.password && (
        <Text style={styles.error}>{FormError.PASSWORD}</Text>
      )}

      <Button
        title={FormFieldsPlaceholder.BUTTON}
        onPress={handleSubmit(signIn)}
      />
    </View>
  );
};

export default AuthComponent;
