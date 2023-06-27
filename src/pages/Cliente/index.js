
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Produto() {
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
                    colors={['rgba(128, 224, 255,0.8)', 'rgba(25,55,254,0.7)']}
                    style={styles.TopoInicial}
                >

                    <View style={styles.orientacao} >
                        {/* // Para icon e texto*/}


                        <TouchableOpacity onPress={() => { navigation.navigate("Menu") }}>
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
                        <Text style={styles.txtProduto}>
                            Clientes
                        </Text>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DescricaoCliente") }}>
                            <Ionicons name="person" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                João Machado
                            </Text>
                            <Text style={styles.tel}>
                                75-9999-9999
                            </Text>

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>
                        <View>
                            <Text>

                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DescricaoCliente") }}>
                            <Ionicons name="person" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                Luiz Cerqueira
                            </Text>
                            <Text style={styles.tel}>
                                75-9999-9999
                            </Text>

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text>

                            </Text>
                        </View>


                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DescricaoCliente") }}>
                            <Ionicons name="person" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                Laercio Santos
                            </Text>
                            <Text style={styles.tel}>
                                75-9999-9999
                            </Text>

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text>

                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DescricaoCliente") }}>
                            <Ionicons name="person" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                Welber Junior
                            </Text>
                            <Text style={styles.tel}>
                                75-9999-9999
                            </Text>

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text>

                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DescricaoCliente") }}>
                            <Ionicons name="person" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                Matheus Silva
                            </Text>
                            <Text style={styles.tel}>
                                75-9999-9999
                            </Text>

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>


                    </View>


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

    tel: {
        
        left: 55,
        top: -10,

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
        height: '80%',
        top: -30,
        borderRadius: 40,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5

    },
    txtProduto: {
        fontSize: 15,
        fontFamily: 'Montserrat_400Regular',
        marginBottom: 10
    },

    button: {
        backgroundColor: '#f7f7f7',
        width: '90%',
        height: '12%',
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,

    },
    txtItens: {
        fontSize: 15,
        position: 'absolute',
        left: 55,
        top: 10,

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
    },
    txtPD: {
        color: 'green',
        left: 210,
        top: -40,
        fontSize: 10,
    },

});
