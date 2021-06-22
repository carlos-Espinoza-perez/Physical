import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Drawer, Snackbar } from "react-native-paper";
import Btn from '../../Utils/ButtonAdd';
import style from './style';

import estilos from "./style";

/* 
    ---> Muy bajo Peso severo = e51c23 --- < 16
    ---> Bajo Peso severo = ef6c00 ---  16 - 17
    ---> Bajo Peso = f9a825 --- 17 - 18.5
    ---> Normal = 0a8f08 --- 18.5 - 25
    ---> SobrePeso = f9a825 --- 25 - 30
    ---> Obeso clase | = ef6c00 --- 30 - 35
    ---> Obeso clase || = e51c23 --- 35 - 40
    ---> Obeso clase ||| = c41613 --- > 40
*/
const calcularColorSegunPeso = (imc) => {
  imc = eval(imc);

  if (imc < 16) return { color: '#e51c23', texto: 'Bajo peso',  };
  else if (imc < 17 && imc > 16) return { color: "#ef6c00", texto: 'Bajo peso' };
  else if (imc > 17 && imc < 18.5) return { color: '#f9a825', texto: 'Bajo peso' };
  else if (imc > 18.5 && imc < 25) return { color: '#0a8f08', texto: 'Peso normal' };
  else if (imc > 25 && imc < 30) return { color: '#f9a825', texto: 'SobrePeso' };
  else if (imc > 30 && imc < 35) return { color: '#ef6c00', texto: 'Obesidad grado I' };
  else if (imc > 35 && imc < 40) return { color: '#e51c23', texto: 'Obesidad grado II' };
  else if (imc > 40) return { color: '#c41613', texto: 'Obesidad grado III' };
}  

const Home = () => {  
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [imc, setImc] = useState();
  const [ideal, setIdeal] = useState();
  const [recomendacion, setRecomendacion] = useState();

  const [hayAltura, setHayAltura] = useState(false);
  const [hayPeso, setHayPeso] = useState(false);

  const recomendaciones = (imc) => {
    const texto = calcularColorSegunPeso(imc).texto;

    const granRecomendacion =
      <View style={{ marginTop: 0, width: '100%' }}>
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
          Hey!. Usted esta con {texto} { texto == "Peso normal" ? 'Felicidades!' : ''}
        </Text>

        <Text style={{ height: 0.7, width: '100%', backgroundColor: '#dddddd90', marginTop: 20, marginBottom: 20 }}>  </Text>
        
        {
          texto == 'Bajo peso'
            ?
            <React.Fragment>
              <Drawer.Item style={{ backgroundColor: '#4791F5' }} icon="star" label="Hacer ejercicio" />
              <Drawer.Item style={{ backgroundColor: '#4AC6FF' }} icon="star" label="Comer con más frecuencia." />
              <Drawer.Item style={{ backgroundColor: '#4FE1E8' }} icon="star" label="Escoger comidas ricas en nutrientes." />
              <Drawer.Item style={{ backgroundColor: '#4AFFD5' }} icon="star" label="Tomar batidos y licuados de frutas." />
              <Drawer.Item style={{ backgroundColor: '#47F59C' }} icon="star" label="Cocinar salsas y sopas con leche en lugar de agua." />
              <Drawer.Item style={{ backgroundColor: '#4FE899' }} icon="star" label="Elegir productos lácteos enteros." />
              <Drawer.Item style={{ backgroundColor: '#57FF78' }} icon="star" label="Anotar cuándo y cuánto se bebe." />
              <Drawer.Item style={{ backgroundColor: '#57FF78' }} icon="star" label="Permitirse caprichos." />
            </React.Fragment>
            :
            false
          }
        
        {
          texto == 'Peso normal'
            ?
            <React.Fragment>
              <Drawer.Item style={{ backgroundColor: '#4791F5' }} icon="star" label="Hey felicidades tu IMC es normal." />
              <Drawer.Item style={{ backgroundColor: '#4AC6FF' }} icon="star" label="Comer la misma frecuencia." />
              <Drawer.Item style={{ backgroundColor: '#47F59C' }} icon="star" label="Recuerde..." />
              <Drawer.Item style={{ backgroundColor: '#57FF78' }} icon="star" label="Uno no engorda por cuanto come" />
              <Drawer.Item style={{ backgroundColor: '#57FF78' }} icon="star" label="Sino por que come" />
            </React.Fragment>
            :
            false
        }

        {
          texto.includes('SobrePeso') || texto.includes('Obesidad grado')
            ?
              <ScrollView >
                <Drawer.Item style={{ backgroundColor: '#4791F5' }} icon="star" label="Antes de dormir, dos vasos de agua." />
                <Drawer.Item style={{ backgroundColor: '#4AC6FF' }} icon="star" label="Duerme siesta siempre que puedas." />
                <Drawer.Item style={{ backgroundColor: '#35DEB6' }} icon="star" label="Come chile." />
                <Drawer.Item style={{ backgroundColor: '#50FA3C' }} icon="star" label="Cena proteina." />
                <Drawer.Item style={{ backgroundColor: '#57FF78' }} icon="star" label="Come fruta entre comidas." />
                <Drawer.Item style={{ backgroundColor: '#57FF78' }} icon="star" label="Usa meno el microondas." />
                <Drawer.Item style={{ backgroundColor: '#4FE899' }} icon="star" label="Consume pepino y toronja." />
                <Drawer.Item style={{ backgroundColor: '#47F59C' }} icon="star" label="El chocolate, mejor amargo." />
                <Drawer.Item style={{ backgroundColor: '#30FD94' }} icon="star" label="Toma el sol." />
                <Drawer.Item style={{ backgroundColor: '#47F59C' }} icon="star" label="El chocolate, mejor amargo." />
                <Drawer.Item style={{ backgroundColor: '#30FD94' }} icon="star" label="Toma el sol." />

              </ScrollView>
            :
              false
        }
        

      </View>

      setRecomendacion(granRecomendacion);
  };

  const formula = (altura, peso) => {
    /* Aqui se esta convirtiendo la altura en cm a m */
    const metros = eval(altura)/100;

    /* Aqui se esta elevando  */
    altura = metros * metros;

    peso = eval(peso);
  
    /* Aqui se esta haciendo el calculo segun la formula */
    const resultado = (peso / altura).toFixed(2);

    return resultado;
  };

  const calcularIMC = (altura, peso) => {
    if (!altura) return setHayAltura(true);
    if (!peso) return setHayPeso(true);

    const resultado = formula(altura, peso);
    const altura2 = (eval(altura) / 100)* (eval(altura) / 100); 
  
    setIdeal( (23.2 * altura2).toFixed(2));
    setImc(resultado);
    recomendaciones(resultado); 
  };

  return (
    <View style={estilos.view}>
      <ScrollView style={{ height: '100%' }}>
      <Text style={estilos.title}> IMC </Text>
            
      <Text style={styles.text}> Peso en kg: </Text>
      <TextInput style={styles.input} keyboardType="numeric" value={ peso ? peso.toString() : null} onChangeText={setPeso}/> 

      <Text style={{marginTop: 25}, styles.text}> Altura en cm: </Text>
      <TextInput style={styles.input} keyboardType="numeric" value={ altura ? altura.toString() : null  } onChangeText={setAltura}/> 
      
      <View style={styles.gridContainer}>
        <View style={ styles.gridItem }> 
          <Text style={{ fontSize: 12  }, estilos.title}> Tu IMC actual es: </Text>
          <Text style={{ textAlign: 'center', marginTop: 5, color: calcularColorSegunPeso(imc || 0).color }}> {imc} </Text>
        </View>

        <View style={ styles.gridItem  }>
          <Text style={{fontSize: 12}, estilos.title}> Tu peso ideal seria: </Text>
          <Text style={{ textAlign: 'center', marginTop: 5  }}> {ideal} </Text>
          </View>
          
          {recomendacion  }

        </View>
      </ScrollView>



      <Btn onPress={() => calcularIMC(altura, peso)} />
      
      <Snackbar visible={hayPeso} onDismiss={() => setHayPeso(false)} action={{ label: 'Cerrar', onPress: () => setHayPeso(false)}}>
        Por favor defina un peso.
      </Snackbar>

      <Snackbar visible={hayAltura} onDismiss={() => setHayAltura(false)} action={{ label: 'Cerrar', onPress: () => setHayAltura(false) }}>
        Por favor defina una altura.
      </Snackbar>
    </View>
    )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: '2.5%',
    maxWidth: '95%',
    borderWidth: 1,
    borderColor: '#28334754',
    borderRadius: 4,
    color: '#28334754'

  },
  text: {
    /* Style for ubication of text */
    marginLeft: '2.5%',
    marginBottom: 10,
    marginTop: 20,
    maxWidth: '95%',
    
    /* styles in general */
    fontSize: 14,
    fontWeight: '600',
    color: '#28334754'

  },

  gridContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 22,
  },

  gridItem: {
    width: '50%',
    minHeight: 65,
    marginBottom: 12
  }
});

export default Home;
