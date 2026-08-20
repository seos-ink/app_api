import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import theme from "./theme";

export default function LiveMapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      // 1. Request foreground location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // 2. Get the actual current position
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    }

    getCurrentLocation();
  }, []);

  // Show a loading spinner while fetching the location
  if (!location && !errorMsg) {
    return (
      <View style={theme.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={theme.text}>Fetching your real-time location...</Text>
      </View>
    );
  }

  // Show an error message if permission was denied
  if (errorMsg) {
    return (
      <View style={theme.centerContainer}>
        <Text style={theme.text}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={theme.container}>
      {location && (
        <MapView
          style={theme.map}
          // The initial region focuses the map on the user's coordinates
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005, // Controls the zoom level (smaller = closer)
            longitudeDelta: 0.005,
          }}
          showsUserLocation={true} // Shows the native blue pulsing dot on the map
          followsUserLocation={true} // Centers the map on the user as they move
        >
          {/* Optional: Add a custom marker on top of their location */}
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
            description="Your current real location"
          />
        </MapView>
      )}
    </View>
  );
}
