import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';
import Direction from '../App_2';

const Tab = createBottomTabNavigator();

// Form input dari github pages
const forminput = 'https://mutiamarhatika.github.io/PGPBLXII/';

// Peta web dari github pages
const webmap = 'https://mutiamarhatika.github.io/PGPBLXII/map.html';

function MapScreen() {
  return <WebView source={{uri: webmap}} />;
}

function Address() {
  return (
    <View>
      <Callapi />
    </View>
  );
}

function Arah() {
  return (
    <View>
      <Direction />
    </View>
  );
}

function AddDataScreen() {
  return <WebView source={{uri: forminput}} />;
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-pin" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Address"
          component={Address}
          options={{
            tabBarLabel: 'Address',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="address-card" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Arah"
          component={Arah}
          options={{
            tabBarLabel: 'Direction',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="directions" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'Add Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="calendar-plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#7ED7C1',
  },
});
