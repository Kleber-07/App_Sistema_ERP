import * as React from 'react';

import { useState } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';







export default function Registro() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.cabeçalho}>
                <Text style={styles.textoIni}>CADASTRAR</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu [EMAIL] aqui"
                    style={styles.input}
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                />
                <Text style={styles.registroText}>Email precisa ter [@] e [.com]</Text>

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Digite sua [SENHA] aqui"
                    style={styles.input}
                    value={senha}
                    onChangeText={txt => setSenha(txt)}
                />
                <Text style={styles.registroText}>Senha precisa conter [6] digitos</Text>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("SignIn"), Alert.alert(title = "Aviso", "Sucesso ao cadastrar") }}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                -
                
            </Animatable.View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1937fe",
    },
    cabeçalho: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    textoIni: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFFFFE",
    },
    containerForm: {
        backgroundColor: "#FFFFFE",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#1937fe",
        width: "100%",
        borderRadius: 12,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFFFFE",
        fontSize: 18,
        fontWeight: "bold",
    },
    registro: {
        marginTop: 14,
        alignSelf: "center",
    },
    registroText: {
        color: "#1937fe",
        marginTop: -15
    }
})