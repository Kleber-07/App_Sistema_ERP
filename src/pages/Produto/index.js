
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
                            Produtos
                        </Text>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Descricao") }}>
                            <Ionicons name="logo-xbox" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                Console XBOX
                            </Text>
                            <Ionicons name="star" size={16} color="#80e0ff" top={-12.5} left={56} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-30.5} left={73} />
                            <Ionicons name="star-half-sharp" size={18} color="#80e0ff" top={-49.4} left={90} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-67} left={108} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-83} left={126} />

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>
                        <View>
                            <Text>

                            </Text>
                        </View>
                        
                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("DescricaoPS") }}>
                            <Ionicons name="logo-playstation" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                Console PS 5
                            </Text>
                            <Ionicons name="star" size={16} color="#80e0ff" top={-12.5} left={56} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-30.5} left={73} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-48} left={90} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-66} left={108} />
                            <Ionicons name="star-half-sharp" size={18} color="#80e0ff" top={-85} left={126} />

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text>

                            </Text>
                        </View>


                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Descricao") }}>
                            <Ionicons name="logo-apple" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                IPHONE 8
                            </Text>
                            <Ionicons name="star" size={16} color="#80e0ff" top={-12.5} left={56} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-30.5} left={73} />
                            <Ionicons name="star-half-sharp" size={18} color="#80e0ff" top={-49.4} left={90} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-67} left={108} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-83} left={126} />

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text>

                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Descricao") }}>
                            <Ionicons name="logo-apple" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                IPHONE X
                            </Text>
                            <Ionicons name="star" size={16} color="#80e0ff" top={-12.5} left={56} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-30.5} left={73} />
                            <Ionicons name="star-half-sharp" size={18} color="#80e0ff" top={-49.4} left={90} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-67} left={108} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-83} left={126} />

                            <Text style={styles.txtPD} >
                                ATIVO
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text>

                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Descricao") }}>
                            <Ionicons name="logo-android" size={40} color="#80e0ff" top={8} left={10} />
                            <Text style={styles.txtItens}>
                                XIAOMI 8
                            </Text>
                            <Ionicons name="star" size={16} color="#80e0ff" top={-12.5} left={56} />
                            <Ionicons name="star" size={16} color="#80e0ff" top={-30.5} left={73} />
                            <Ionicons name="star-half-sharp" size={18} color="#80e0ff" top={-49.4} left={90} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-67} left={108} />
                            <Ionicons name="star-outline" size={15} color="#80e0ff" top={-83} left={126} />

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
        marginBottom:10
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
        top: -110,
        fontSize: 10,
        },

});



