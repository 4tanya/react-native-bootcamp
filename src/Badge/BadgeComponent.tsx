import React, {FC, useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {UserContext} from '../context';
import {Loader, BadgeRowItem} from '../components';
import BadgeProps from './BadgeProps';
import styles from './styles';
import BadgeService from './BadgeService';

const BadgeComponent: FC = () => {
  const {userId, token} = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<BadgeProps>();

  const service = new BadgeService();

  const loadData = async () => {
    try {
      const data = (await service.get({userId, token})) as BadgeProps;
      setUser(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <View style={styles.container}>
      <View style={styles.qrcode}>
        <QRCode value="https://globant.com" size={150} />
      </View>
      <BadgeRowItem
        title={'Full Name:'}
        value={`${user?.firstName} ${user?.lastName}`}
      />
      <BadgeRowItem title={'Date Of Birth:'} value={user?.dateOfBirth} />
      <BadgeRowItem title={'Member Id:'} value={user?.memberId} />
    </View>
  );
};

export default BadgeComponent;
