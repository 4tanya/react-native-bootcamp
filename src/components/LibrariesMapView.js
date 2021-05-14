import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Loader from './common/Loader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LibrariesMapView = ({data, loading, location}) => {
  const mapRef = useRef(null);

  const iosEdgePadding = {top: 50, right: 50, bottom: 50, left: 50};

  const androidEdgePadding = {
    top: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.top),
    right: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.right),
    bottom: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.bottom),
    left: PixelRatio.getPixelSizeForLayoutSize(iosEdgePadding.left),
  };

  const edgePadding =
    Platform.OS === 'android' ? androidEdgePadding : iosEdgePadding;

  return (
    <View>
      {!location && <Loader loading={loading} />}
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          showsUserLocation={true}
          isAccessibilityElement={true}
          mapPadding={edgePadding}
          onMapReady={() =>
            mapRef.current.fitToSuppliedMarkers(
              data.map(({id}) => id.toString()),
              {edgePadding, animated: true},
            )
          }>
          {data.map(({latitude, longitude, name, id}) => (
            <Marker
              identifier={id.toString()}
              key={id}
              coordinate={{latitude: +latitude, longitude: +longitude}}
              title={name}
              description={name}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: windowWidth,
    height: windowHeight,
    marginBottom: 1,
  },
});

export default LibrariesMapView;
