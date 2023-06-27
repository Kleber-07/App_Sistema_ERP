import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_300Light } from '@expo-google-fonts/montserrat';




export default function Cadastrar() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('')
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold, Montserrat_300Light
  });

  if (!fontsLoaded) {
    return <Text>
      FONTE ULTILIZADA, CARREGANDO...
    </Text>;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <LinearGradient
          // Background Degrade
          colors={['rgba(73,56,249,1)', 'rgba(25,55,254,1)']}
          style={styles.TopoInicial}
        >

          <View style={styles.orientacao} >
            {/* // Para icon e texto*/}
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>

              <SimpleLineIcons name="arrow-left-circle" size={24} color="white" />

            </TouchableOpacity>
          </View>

          <Text style={styles.txtInicial}>
            Transações
          </Text>


          <Text style={styles.txtDespesas}>
            Suas despesas totais
          </Text>

          <Text style={styles.txtValor}>
            R$ 2.506,80
          </Text>

        </LinearGradient>

        <View style={styles.topCell}>
        </View>

        <View style={{ width: '100%', alignItems: 'center' }}>

          <View style={styles.CadastroFinanceiro}>

            <Ionicons name="remove" size={80} color="#FFFFFF" left={160} top={-10} position='absolute' />


            <TextInput style={styles.input}
              onChangeText={setUsername}
              value={username}
            >
            
            </TextInput>

          

            <Ionicons name="search" size={24} color="#3D56FA" left={40} top={12} />
          
            <Text style={styles.procurar}>
              Procurar
            </Text>

            <Ionicons name="ellipse" size={80} color="#FFCF87" left={25} top={150} position='absolute' />
            <Ionicons name="ellipse" size={80} color="#FFCF87" left={25} top={350} position='absolute' />
            <Ionicons name="ellipse" size={80} color="#E09FFF" left={25} top={250} position='absolute' />
            <Text style={styles.compras}>
              Compras
            </Text>
            <Text style={styles.comprasSub}>
              15/05/2023,8:20PM
            </Text>
            <Text style={styles.comprasvalor}>
              -R$120
            </Text>

            <Text style={styles.compras2}>
              Locação
            </Text>
            <Text style={styles.comprasSub2}>
              05/06/2023,10:20PM
            </Text>
            <Text style={styles.comprasvalor2}>
              -R$500
            </Text>

            <Text style={styles.compras3}>
              Compras
            </Text>
            <Text style={styles.comprasSub3}>
              15/06/2023,9:30PM
            </Text>
            <Text style={styles.comprasvalor3}>
              -R$259
            </Text>

            <Ionicons name="ios-chevron-forward-outline" size={28} color="#80E0FF" left={350} top={175} position='absolute' />
            <Ionicons name="ios-chevron-forward-outline" size={28} color="#80E0FF" left={350} top={280} position='absolute' />
            <Ionicons name="ios-chevron-forward-outline" size={28} color="#80E0FF" left={350} top={380} position='absolute' />

            <Ionicons name="ios-cart-outline" size={40} color="#A27430" left={42} top={172} position='absolute' />
            <Ionicons name="ios-business-outline" size={40} color="#9137BC" left={42} top={272} position='absolute' />
            <Ionicons name="ios-cart-outline" size={40} color="#A27430" left={42} top={372} position='absolute' />



          </View>

        </View>
      </View>

    )
  }
};

const styles = StyleSheet.create({
  compras: {
    color: '#80E0FF',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: 81,
    top: 35,
    fontSize: 16
  },
  comprasSub: {
    color: '#BFBFBF',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 81,
    top: 35,
    fontSize: 14
  },
  comprasvalor: {
    color: '#000000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 274,
    top: -5,
    fontSize: 14
  },


  compras2: {
    color: '#80E0FF',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: 81,
    top: 55,
    fontSize: 16
  },
  comprasSub2: {
    color: '#BFBFBF',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 81,
    top: 55,
    fontSize: 14
  },
  comprasvalor2: {
    color: '#000000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 274,
    top: 19,
    fontSize: 14
  },


  compras3: {
    color: '#80E0FF',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: 81,
    top: 75,
    fontSize: 16
  },
  comprasSub3: {
    color: '#BFBFBF',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 81,
    top: 75,
    fontSize: 14
  },
  comprasvalor3: {
    color: '#000000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 274,
    top: 37,
    fontSize: 14
  },



  topCell: {
    top: 50,
    background: '#FFFFFF',
    borderRadius: 4,  
  
  },

  procurar: {
    fontSize: 20,
    color: '#3D56FA',
    left: 70,
    top: -17
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },

  TopoInicial: {
    width: '100%',
    height: '30%',
    padding: 20,
    borderBottomLeftRadius: 85,
    borderBottomRightRadius: 85,
  },

  orientacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 30,
  },
  txtInicial: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    marginLeft: 130,
    marginTop: -27

  },

  txtDespesas: {
    color: '#87F0FF',
      fontSize: 22,
      fontFamily: 'Montserrat_400Regular',
      marginLeft: 60,
      top: 50,
  },

  txtValor: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat_700Bold',
    marginLeft: 80,
    top: 70,
  },

  CadastroFinanceiro: {
    backgroundColor: '#3650FC',
    width: 400,
    height: 600,
    top: 25,
    borderRadius: 70,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5

  },
  input: {
    width: 315,
    height: 53,
    left: 30,
    top: 50,
    borderRadius: 16,
    padding: 5,
    fontSize: 16,
    // marginLeft: 32,
    backgroundColor: '#05199E'
  },
  button: {
    backgroundColor: "#1937fe",
    width: "80%",
    borderRadius: 12,
    paddingVertical: 8,
    marginTop: 14,
    marginLeft: 30,
    alignItems: 'center',

  },
  buttonText: {
    color: "#FFFFFE",
    fontSize: 18,
    fontWeight: "bold",
  },

});
