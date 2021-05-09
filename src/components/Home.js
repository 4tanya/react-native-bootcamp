import React from 'react';
import {View, Text} from 'react-native';

const Home = props => {
  return (
    <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'column'}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          flexDirection: 'row',
		  backgroundColor: 'yellow',
		  alignItems: 'center',
        }}>
        <Text style={{fontSize: 50}}>Text 1</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <Text>Text 2</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Text 3</Text>
      </View>
    </View>
  );
};

export default Home;
