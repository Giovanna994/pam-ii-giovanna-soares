import React from 'react';
import {Text, StyleSheet, ImageBackground, View, SafeAreaView, SectionList,StatusBar,} from 'react-native';

const Teste = () => {
  return (
    <Text style={styles.baseText}>
      Texto teste!
      <Text style={styles.innerText}> Deu certo! </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default Teste;

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Teste2 = () => (
  <View style={styless.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styless.text}>Apagou o Texto teste... Pilantra!</Text>
    </ImageBackground>
  </View>

  
);

const styless = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default Teste2;

const Teste3 = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <Text>Apagou o teste 2 AAAAA</Text>
    </View>
  );
};

export default Teste3;

const DATA = [
  {
    title: 'Lista 1',
    data: ['Item 1', 'Item 2', 'Item 3'],
  },
  {
    title: 'Lista 2',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
];

const Teste4 = () => (
  <SafeAreaView style={styles1.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles1.item}>
          <Text style={styles1.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles1.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Teste4;

