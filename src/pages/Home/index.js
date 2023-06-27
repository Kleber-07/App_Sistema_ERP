
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();


  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return
    <Text>
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


            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Menu") }}> 
              <SimpleLineIcons name="menu" size={24} color="white" />
            </TouchableOpacity>

            <Image style={styles.imgperfil} source={{ uri: 'https://perfil.napratica.org.br/assets/v2020/testepersonalidade-77d5e996bbe11f2e3429c0bd09753cb6d74d0c8fd29b4840653848a32c93c1da.png' }} />

          </View>

          <Text style={styles.txtInicial}>
            Bem Vindo(a), {'\n'}Usuário,
          </Text>

        </LinearGradient>

        <View style={{ width: '100%', alignItems: 'center' }}>

          <View style={styles.GraficoSaldo}>
            <Text style={{ color: '#3A3A3A', fontSize: 16, fontFamily: 'Montserrat_400Regular' }}>
              Seu saldo total
            </Text>

            <Text style={{ color: '#2d99ff', fontSize: 30, fontFamily: 'Montserrat_700Bold' }}>
              R$ 8.500,00
            </Text>
          </View>
          {/* GRAFICO MANUAL */}
          <View style={styles.Grafico}>
            {/* HAST UM */}
          </View>

          <View style={styles.Grafico2}>
            {/* HAST DOIS */}
          </View>

          <View style={styles.Grafico3}>
          </View>
          <View style={styles.Grafico4}>

          </View>
          <View style={styles.Grafico5}>

          </View>
          <View style={styles.Grafico6}>

          </View>
          <View style={styles.Grafico7}>

          </View>
          <View style={styles.Grafico8}>

          </View>
          <View style={styles.Grafico9}>

          </View>
          <View style={styles.Grafico10}>

          </View>
          <View style={styles.Grafico11}>

          </View>
          <View style={styles.Grafico12}>

          </View>
          <View style={styles.Grafico13}>

          </View>
          <View style={styles.Grafico14}>
          </View>
          {/* GRAFICO MANUAL */}


        </View>


        <View style={styles.contasBancarias} >




          <LinearGradient
            // Background Degrade
            colors={['rgba(73,56,249,1)', 'rgba(25,55,254,1)']}
            style={styles.fundogradiente}
          >



            <Text style={{ color: 'white', fontSize: 19, fontFamily: 'Montserrat_400Regular', left: 10, height: 50, width: 190, top: 10 }}>
              Verifique suas contas e recibos
            </Text>
            
          </LinearGradient>


        </View>

      </View>




    );
  }
}

const styles = StyleSheet.create({
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

  imgperfil: {
    width: 50,
    height: 50,
    borderRadius: 40
  },
  orientacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  txtInicial: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat_400Regular',
    marginLeft: 50,
  },
  GraficoSaldo: {
    backgroundColor: 'white',
    width: '80%',
    height: '60%',
    top: -30,
    borderRadius: 40,
    padding: 20,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5

  },

  Grafico: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 122,
    top: 60,
    borderRadius: 20,
    left: 64,
  },
  Grafico2: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 32,
    top: 180,
    borderRadius: 20,
    left: 77,
  },

  Grafico3: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 100,
    top: 80,
    borderRadius: 20,
    left: 102,
  },
  Grafico4: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 20,
    top: 176,
    borderRadius: 20,
    left: 115,
  },
  Grafico5: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 80,
    top: 100,
    borderRadius: 20,
    left: 140,
  },
  Grafico6: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 15,
    top: 180,
    borderRadius: 20,
    left: 153,
  },
  Grafico7: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 75,
    top: 105,
    borderRadius: 20,
    left: 178,
  },
  Grafico8: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 10,
    top: 180,
    borderRadius: 20,
    left: 191,
  },
  Grafico9: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 40,
    top: 180,
    borderRadius: 20,
    left: 214,
  },
  Grafico10: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 60,
    top: 140,
    borderRadius: 20,
    left: 227,
  },
  Grafico11: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 70,
    top: 110,
    borderRadius: 20,
    left: 252,
  },
  Grafico12: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 30,
    top: 175,
    borderRadius: 20,
    left: 265,
  },
  Grafico13: {
    backgroundColor: '#2D99FF',
    position: 'absolute',
    width: 9,
    height: 20,
    top: 170,
    borderRadius: 20,
    left: 290,
  },
  Grafico14: {
    backgroundColor: '#A5F3FF',
    position: 'absolute',
    width: 9,
    height: 90,
    top: 90,
    borderRadius: 20,
    left: 303,
  },



  contasBancarias: {
    width: '80%',
    height: '20%',

  },
  fundogradiente: {
    width: '100%',
    height: '100%',
    top: -200,
    borderRadius: 40,
    padding: 20,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 5


  }

});



