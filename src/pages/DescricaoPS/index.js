import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';
import { jsx } from '@emotion/react';

export default function DescricaoPS() {

    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [username2, setUsername2] = useState('')
    const [username3, setUsername3] = useState('')
    const [myNumber, setMyNumbur] = useState('')
    const [myNumber2, setMyNumbur2] = useState('')

    function handleSignIn() {
        if (username === '') {
            alert("PREEMCHA OS CAMPOS")
            return;
        }
        const data = {
            username
        }
        console.log(data)
    }

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

                    <Image style={styles.imgperBack} source={{ uri: 'https://images-americanas.b2w.io/produtos/01/00/img/5913373/6/5913373661_2SZ.jpg' }} />

                    <View style={styles.orientacao} >
                        {/* // Para icon e texto*/}

                        <LinearGradient
                            // Background Degrade
                            colors={['rgba(0, 0, 0,0.8)', 'rgba(255,255,255,0.1)']}
                            style={styles.TopImag}
                        >

                            <TouchableOpacity style={styles.setaPage} onPress={() => navigation.navigate("Produto")}>

                                <SimpleLineIcons name="arrow-left-circle" size={24} color="white" top={10} />

                            </TouchableOpacity>

                            <Text style={styles.textpag}>
                                Descrição de Produto
                            </Text>

                        </LinearGradient>


                    </View>



                </LinearGradient>

                <View style={{ width: '100%', alignItems: 'center' }}>

                    <View style={styles.desc}>
                        <Text style={styles.desctxt}>
                            Console PS 5
                        </Text>
                        <Ionicons name="information-circle" size={30} color="#80e0ff" top={30} left={15} />
                        <Text style={styles.info}>
                            ATIVO
                        </Text>

                        <View style={styles.estrela}>

                            <Ionicons name="star" size={20} color="#80e0ff" top={1} left={70} />
                            <Ionicons name="star" size={20} color="#80e0ff" top={-20.5} left={95} />
                            <Ionicons name="star" size={20} color="#80e0ff" top={-42} left={120} />
                            <Ionicons name="star" size={20} color="#80e0ff" top={-63} left={145} />
                            <Ionicons name="star-half-sharp" size={22} color="#80e0ff" top={-86} left={170} />
                            
                        </View>

                        <Text style={styles.descInfo}>
                            Play Has No Limits™ Jogar Não Tem Limites. PlayStation®5 o console PS5™ oferece novas possibilidades de jogabilidade que você nunca imaginou.
                            Experimente o carregamento extremamente rápido do SSD de ultra-velocidade, uma imersão mais profunda. </Text>

                        <Text style={styles.vendido}>
                            202,6 mil
                        </Text>

                    </View>
                    <LinearGradient
                        colors={['rgba(255, 64, 64,0.8)', 'rgba(184, 2, 2,1)']}
                        style={styles.buttonRemove}>

                    </LinearGradient>

                    <LinearGradient
                        colors={['rgba(209, 192, 2,0.8)', 'rgba(255, 241, 89,1)']}
                        style={styles.buttonEdit}>
                    </LinearGradient>

                    <Text style={styles.txtRemover}>
                        REMOVER
                    </Text>
                    <Text style={styles.txtEditar}>
                        EDITAR
                    </Text>
                    <View style={styles.grafico}>

                        <Image
                            style={styles.graficoImg}
                            source={require('../../imagem/grafico.png')}
                        >

                        </Image>

                    </View>
                </View>
            </View>



        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
    },

    TopoInicial: {
        width: '100%',
        height: '20%',
        padding: 20,
        borderBottomLeftRadius: 85,
        borderBottomRightRadius: 85,
    },

    TopImag: {
        width: 400,
        height: 200,
        left: -20,
        top: -185,

    },
    imgperBack: {
        position: 'relative',
        width: 400,
        height: 200,
        top: 15,
        left: -20,


    },

    setaPage: {
        left: 15,
        top: -1,
    },

    textpag: {
        color: "#FFFFFE",
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 85,
        marginTop: -19
    },

    buttonText: {
        color: "#FFFFFE",
        fontSize: 18,
        fontWeight: "bold",
    },
    desc: {
        backgroundColor: '#f0f0ef',
        width: '100%',
        height: '100%',
        top: 73,


    },
    desctxt: {
        color: 'black',
        fontFamily: 'Montserrat_700Bold',
        top: 20,
        left: 20,
        fontSize: 20,
    },

    info: {
        left: 50,
        top: -2,
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular',
        color: 'green'

    },
    descInfo: {
        width: 350,
        left: 20,
        top: -70,
        color: '#a3a3a3',
        justifyContent: 'center',
        textAlign: 'justify',
        lineHeight: 25,

    },
    estrela: {
        left: -50,
    },
    vendido: {
        top: -280,
        left: 150,
        color: '#a3a3a3',

    },
    buttonRemove: {
        position: 'absolute',
        width: 120,
        height: 40,
        left: 45,
        borderRadius: 20,
        top: 400,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5
    },
    buttonEdit: {
        position: 'absolute',
        width: 120,
        height: 40,
        left: 205,
        borderRadius: 20,
        top: 400,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5
    },
    txtRemover: {
        position: 'absolute',
        color: 'white',
        fontFamily: 'Montserrat_700Bold',
        top: 408,
        left: 55,
        fontSize: 15,
    },
    txtEditar: {
        position: 'absolute',
        color: 'black',
        fontFamily: 'Montserrat_700Bold',
        top: 408,
        left: 230,
        fontSize: 15,
    },
    grafico: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '95%',
        height: '24%',
        top: 450,
        borderRadius: 20,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5
    },
    graficoImg: {
        width: '100%',
        height: '100%',
    }
});
