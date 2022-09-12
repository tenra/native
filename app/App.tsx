import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Users from './components/Users';

export default function App() {
  return (
    <>
      <Header title="User All" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello World!!w</Text>

        <Users />
        
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontWeight: 'bold'
  }
});
