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
/>
</View>

  );
}

