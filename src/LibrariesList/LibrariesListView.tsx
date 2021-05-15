import React, {FC} from 'react';
import {View, Text, FlatList, TouchableHighlight} from 'react-native';
import {colors} from '../styles/_base';
import {Loader} from '../components';
import {ListViewProps} from './models';
import styles from './styles';

const LibrariesListView: FC<ListViewProps> = ({data, loading}) => (
  <View>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item: {name, address1, city, zipCode, country}}) => (
        <TouchableHighlight
          style={styles.listItem}
          underlayColor={colors.primary}>
          <View>
            <Text key={name}>
              Name: <Text style={styles.textValue}>{name}</Text>
            </Text>
            <Text key={address1}>
              Address: <Text style={styles.textValue}>{address1}</Text>
            </Text>
            <Text key={city}>
              City: <Text style={styles.textValue}>{city}</Text>
            </Text>
            <Text key={zipCode}>
              Zip Code: <Text style={styles.textValue}>{zipCode}</Text>
            </Text>
            <Text key={country}>
              Country: <Text style={styles.textValue}>{country}</Text>
            </Text>
          </View>
        </TouchableHighlight>
      )}
      ListFooterComponent={<Loader loading={loading} />}
    />
  </View>
);

export default LibrariesListView;
