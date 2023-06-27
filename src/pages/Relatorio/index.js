import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
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

    


          <Text style={styles.txtDespesas}>
            Você pode verificar seus recibos aqui
          </Text>

        </LinearGradient>

        <LinearGradient style={styles.CadastroFinanceiro}
          // Background Degrade
          colors={['rgba(225, 0, 255, 0.6)','rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.5)', 'rgba(64, 212, 242, 0.8)' ]}>
          
          <Text style={styles.valorCard}>
            R$ 18.000,00
          </Text>

          <Text style={styles.subText}>
            EMPRESA
          </Text>
        
          <Text style={styles.validadeText}>
            01/2026
          </Text>

          <Text style={styles.numText}>
            **** **** **** 4689
          </Text>

          {/* Ciculo */}
          <View style={styles.CircleShapeView}> 
          </View>
          <View style={styles.CircleShapeView2}>
          </View>
          {/* Ciculo */}

          <Text style={styles.subText2}>
            MASTERCARD
          </Text>

        </LinearGradient>

        <View style={styles.CadastroFinanceiro2}>

          <Text style={styles.valorCard2}>
            R$ 8.500,00
          </Text>

          <Text style={styles.subText3}>
            PESSOAL
          </Text>

          <Text style={styles.validadeText2}>
            01/2028
          </Text>

          <Text style={styles.numText2}>
            **** **** **** 0589
          </Text>

        </View>


        <View style={{ width: '100%', alignItems: 'center' }}>

          <View>

            <Ionicons name="ellipse" size={80} color="#FFCF87" left={-90} top={280} position='absolute' />
            <Ionicons name="ellipse" size={80} color="#E09FFF" left={-90} top={350} position='absolute' />
            <Ionicons name="ellipse" size={80} color="#FFCF87" left={-90} top={420} position='absolute' />

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

            <Ionicons name="ios-chevron-forward-outline" size={28} color="#80E0FF" left={260} top={300} position='absolute' />
            <Ionicons name="ios-chevron-forward-outline" size={28} color="#80E0FF" left={260} top={370} position='absolute' />
            <Ionicons name="ios-chevron-forward-outline" size={28} color="#80E0FF" left={260} top={450} position='absolute' />

            <Ionicons name="ios-cart-outline" size={40} color="#A27430" left={-75} top={300} position='absolute' />
            <Ionicons name="ios-business-outline" size={40} color="#9137BC" left={-73} top={370} position='absolute' />
            <Ionicons name="ios-cart-outline" size={40} color="#A27430" left={-75} top={440} position='absolute' />



          </View>

        </View>
      </View>

    )
  }
};

const styles = StyleSheet.create({
  compras: {
    color: '#000',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: -15,
    top: 290,
    fontSize: 16
  },
  comprasSub: {
    color: '#BFBFBF',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: -13,
    top: 290,
    fontSize: 14
  },
  comprasvalor: {
    color: '#000000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 200,
    top: 250,
    fontSize: 14
  },


  compras2: {
    color: '#000',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: -13,
    top: 280,
    fontSize: 16
  },
  comprasSub2: {
    color: '#BFBFBF',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: -15,
    top: 280,
    fontSize: 14
  },
  comprasvalor2: {
    color: '#000000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 195,
    top: 240,
    fontSize: 14
  },


  compras3: {
    color: '#000',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: -10,
    top: 272,
    fontSize: 16
  },
  comprasSub3: {
    color: '#BFBFBF',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: -10,
    top: 270,
    fontSize: 14
  },
  comprasvalor3: {
    color: '#000000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 195,
    top: 238,
    fontSize: 14
  },

  subText: {
    color: '#ffff',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 0,
    top: 55,
    fontSize: 14
  },

  subText2: {
    color: '#ffff',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 123,
    top: 207,
    fontSize: 5
  },

  CircleShapeView: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 150 / 2,
    backgroundColor: '#EC000A',
    top: 255,
    left: 145,
  },
  CircleShapeView2: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 150 / 2,
    backgroundColor: '#F99600',
    top: 255,
    left: 160,
  },

  validadeText: {
    color: '#ffff',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: 2,
    top: 180,
    fontSize: 12
  },

  numText: {
    color: '#ffff',
    fontFamily: 'Montserrat_300Light',
    position: 'absolute',
    width: 200,
    height: 17,
    top: 260,
    left: 22,
    fontSize: 12
  },

    valorCard: {
      position: 'absolute',
      width: 142,
      height: 29,
      left: 20,
      fontFamily: 'Montserrat_700Bold',
      color: '#ffff',
      fontSize: 18,
      top: 50,

  },
    
  validadeText2: {
    color: '#000',
    fontFamily: 'Montserrat_300Light',
    width: 100,
    height: 27,
    left: 1,
    top: 160,
    fontSize: 12
  },

  numText2: {
    color: '#000',
    fontFamily: 'Montserrat_300Light',
    position: 'absolute',
    width: 200,
    height: 17,
    top: 240,
    left: 22,
    fontSize: 12
  },

  valorCard2: {
    position: 'absolute',
    width: 142,
    height: 29,
    left: 20,
    fontFamily: 'Montserrat_700Bold',
    color: '#000',
    fontSize: 18,
    top: 40,

  },
  subText3: {
    color: '#000',
    fontFamily: 'Montserrat_400Regular',
    width: 200,
    height: 27,
    left: 1,
    top: 45,
    fontSize: 14
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
    color: '#ffff',
    width: 300,
    height: 68,
    fontSize: 25,
    fontFamily: 'Montserrat_700Bold',
    top: 30,
    left: 30,
  },

  txtValor: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat_700Bold',
    marginLeft: 80,
    top: 70,
  },
  CadastroFinanceiro: {
    position: 'absolute',
    backgroundColor: 'rgba(43, 71, 252, 0.3)',
    width: 209,
    height: 305,
    top: 200,
    left: 30,
    borderRadius: 40,
    padding: 20,


  },

  CadastroFinanceiro2: {
    position: 'absolute',
    backgroundColor: 'rgba(252, 252, 252, 1)',
    width: 177,
    height: 277,
    top: 220,
    left: 270,
    borderRadius: 40,
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
