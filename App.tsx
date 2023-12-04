/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.grey,
          }}>
          <Section title="Nama">
            Hospital In Your Area
          </Section>
          <Section title="Latar Belakang">
          HIYA merupakan sebuah aplikasi yang dapat digunakan untuk melihat persebaran titik rumah sakit di Kabupaten Sukoharjo yang dapat memberikan informasi terkait nama, alamat, jenis rumah sakit, serta rute untuk menunjukkan rumah sakit terdekat dari lokasi. Latar belakang pembuatan HIYA adalah untuk mengetahui lokasi dan jenis rumah sakit yang ada di Kabupaten Sukoharjo karena wilayah Kabupaten Sukoharjo berbatasan secara langsung dengan kabupaten lain. Rancunya lokasi dan penamaan rumah sakit menjadi alasan utama dibuatnya aplikasi HIYA.
          </Section>
          <Section title="Komponen Aplikasi">
          React Native, HTML dan JS, Leaflet JS, Spreadsheet, App Script, FontAwesome 5, GitHub
          </Section>
          <Section title="Sumber Data">
          Data Titik Koordinat Rumah Sakit (Maps), Icon (Font Awesome5), Link Website Setiap Rumah Sakit 
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
