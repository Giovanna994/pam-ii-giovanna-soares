import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCFaiIUlw5PbO2LU1sJ3_OEr6pHjiRKwLo",
    authDomain: "meuprimeirofirebase-e60c9.firebaseapp.com",
    projectId: "meuprimeirofirebase-e60c9",
    storageBucket: "meuprimeirofirebase-e60c9.appspot.com",
    messagingSenderId: "680381238927",
    appId: "1:680381238927:web:1c36a468fa51ffbb176afa",
    measurementId: "G-D1QXK4TXQ2"
  }

  firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);

    }

    fetchData();
    
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Lista de Nomes: </Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>  
        )}
      />  
    </View>
  );
}

