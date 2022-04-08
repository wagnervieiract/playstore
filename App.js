import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
<Cabecalho/>
<Botao
logo="game-controller-outline"
texto="jogos"
cor="black"
logo2="book"
texto2="livros"
cor2="blue"
/>


<Botao
logo="md-film"
texto="filmes"
cor="red"
logo2="logo-apple"
texto2="apps"
cor2="green"
/>
<Botao
logo="library"
texto="biblioteca"
cor="orange"
logo2="musical-notes"
texto2="musicas"
cor2="purple"
/>
</View>

  );
}

