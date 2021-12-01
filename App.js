import * as React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


import AssetExample from './components/AssetExample';


//import { Button } from 'react-native-paper';

export default class App extends React.Component {

  state = {
      peso : 58,
      altura: 1.71,
      imc: 0,
      legenda: "indeterminado"
  };

  calculoIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: resultado
    })

    if (resultado < 18.5) {
      this.setState({
        legenda: 'Magreza'
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal'
      });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso'
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade'
      });
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave'
      });
    }
  };

  render() {

    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput style={styles.peso}/>
          <TextInput style={styles.altura}/>
          <Button title="Calcular" onPress={this.calculoIMC}>
          </Button>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  app: {
    padding: 10,
  },

  legenda: {
    textAlign: "center",
    fontWeight: "bold",
  },

  resultado: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  diagnostico: {
    textAlign: "center",
    fontSize: 16,
  },

  peso: {
    borderColor: '#000',
    borderWidth: 1,
  },

  altura: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
