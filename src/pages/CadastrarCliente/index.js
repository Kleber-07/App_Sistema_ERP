import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function CadastrarProduto() {

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
                    <TouchableOpacity onPress={() => navigation.navigate("Cliente")}>

                        <SimpleLineIcons name="arrow-left-circle" size={24} color="white" />

                    </TouchableOpacity>
                </View>

                <Text style={styles.txtInicial}>
                    Cadastro de Cliente
                </Text>

            </LinearGradient>

            <View style={{ width: '100%', alignItems: 'center' }}>

                <View style={styles.CadastroFinanceiro}>

                    


                    <TextInput style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                        placeholder='Nome do Cliente'
                    >
                    </TextInput>

                    <TextInput style={styles.input}
                        onChangeText={setUsername2}
                        value={username2}
                        placeholder='CPF do Cliente'
                    >
                    </TextInput>

                    <TextInput style={styles.input}
                        onChangeText={setUsername3}
                        value={username3}
                        placeholder='Endereço do Cliente'
                    >
                    </TextInput>

                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        onChangeText={setMyNumbur}
                        value={myNumber}
                        placeholder='Telefone do Cliente '
                    >
                    </TextInput>

                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        onChangeText={setMyNumbur2}
                        value={myNumber2}
                        placeholder='Idade do Cliente'
                    >
                    </TextInput>

                    <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Sucesso ao cadastrar") }}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>

    )
};

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
        marginLeft: 85,
        marginTop: -27

    },
    CadastroFinanceiro: {
        backgroundColor: 'white',
        width: 350,
        height: 500,
        top: -80,
        borderRadius: 40,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5

    },
    input: {
        width: '80%',
        borderRadius: 10,
        padding: 5,
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        margin: 20,
        marginLeft: 32
    },
    button: {
        backgroundColor: "#80e0ff",
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
