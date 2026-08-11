// import { Text, View } from "react-native";
// import { theme } from "./theme";

// export default function Index() {
//   return (
//     <View style={theme.container}>
//       <Text style={theme.title}> New APP </Text>
//     </View>
//   );
// }

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css'; // CRITICAL: Don't forget this import!

export default function MyLeafletMap() {
  const position = [51.505, -0.09]; // London

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}