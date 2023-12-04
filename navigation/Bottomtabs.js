import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <ScrollView>
      <Text style={styles.title} MyMaps></Text>

      <View>
        <View style={styles.listitem}>
          <Image source={require('../peta/peta1.jpg')} style={styles.image} />
          <Text style={styles.caption}>Peta DAS Metode Titik Berat</Text>
        </View>

        <View style={styles.listitem}>
          <Image source={require('../peta/peta2.jpg')} style={styles.image} />
          <Text style={styles.caption}>
            Peta DAS Metode Visual Faktor Topografis
          </Text>
        </View>

        <View style={styles.listitem}>
          <Image source={require('../peta/peta3.jpg')} style={styles.image} />
          <Text style={styles.caption}>Peta DAS Metode Median Elevasi</Text>
        </View>
      </View>
    </ScrollView>
  );
}
function MapScreen() {
  return <WebView source={webmap}></WebView>;
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function MahasiwaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mahasiswa"
          component={MahasiwaScreen}
          options={{
            tabBarLabel: 'Mahasiswa',
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
  listitems: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
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
});
