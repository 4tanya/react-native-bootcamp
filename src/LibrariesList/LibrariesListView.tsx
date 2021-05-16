import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import {Loader, RowItem, BoxItem} from '../components';
import {ListViewProps} from './models';

const LibrariesListView: FC<ListViewProps> = ({data, loading}) => (
  <View>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item: {name, address1, city, zipCode, country}}) => (
        <BoxItem>
          <RowItem title={'Name:'} value={name} />
          <RowItem title={'Address:'} value={address1} />
          <RowItem title={'City:'} value={city} />
          <RowItem title={'Zip Code:'} value={zipCode} />
          <RowItem title={'Country:'} value={country} />
        </BoxItem>
      )}
      ListFooterComponent={<Loader loading={loading} />}
    />
  </View>
);

export default LibrariesListView;
