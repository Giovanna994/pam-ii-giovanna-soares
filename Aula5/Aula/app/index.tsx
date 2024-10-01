import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyCFaiIUlw5PbO2LU1sJ3_OEr6pHjiRKwLo",
  authDomain: "meuprimeirofirebase-e60c9.firebaseapp.com",
  projectId: "meuprimeirofirebase-e60c9",
  storageBucket: "meuprimeirofirebase-e60c9.appspot.com",
  messagingSenderId: "680381238927",
  appId: "1:680381238927:web:1c36a468fa51ffbb176afa",
  measurementId: "G-D1QXK4TXQ2"
};

//Iniciando o Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //Usuário criado com sucesso
          const user = userCredential.user;
          console.log('Usuário criado com sucesso:', user);
        })
        .catch((error) => {
          //Tratar erros de cadastro
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro ao criar usuário:', error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={handleSignup} />
    </View>
  );
};

export default App;
