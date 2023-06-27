import * as React from 'react';

import { useState } from 'react';

import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';






export default function Menu() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.cabeçalho}>
                <Text style={styles.textoIni}>MENU E.R.P</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>


                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Routes") }}>
                <LinearGradient style={styles.CadastroFinanceiro}
                    // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="ios-bar-chart" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText}>Financeiro</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("RoutesProduto") }}>
                    <LinearGradient style={styles.MenuProduto}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="basket" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText1}>Produto</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("RoutesClientes") }} >
                    <LinearGradient style={styles.MenuProduto1}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="person" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText2}>Cliente</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View>
                    <Text>

                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }}>
                    <LinearGradient style={styles.CadastroFinanceiro}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="md-stats-chart" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText}>Operações</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }}>
                    <LinearGradient style={styles.MenuProduto}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="business" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText1}>Empresa</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }} >
                    <LinearGradient style={styles.MenuProduto1}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="md-train" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText2}>Fornecedor</Text>
                    </LinearGradient>
                </TouchableOpacity>
                
                <View>
                    <Text>

                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }}>
                    <LinearGradient style={styles.CadastroFinanceiro}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="md-map" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText}>Plano</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }}>
                    <LinearGradient style={styles.MenuProduto}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="md-cog" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText1}>Serviços</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }} >
                    <LinearGradient style={styles.MenuProduto1}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="ios-people-sharp" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText2}>Funcionários</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View>
                    <Text>

                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }}>
                    <LinearGradient style={styles.CadastroFinanceiro}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="ios-document-text" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText}>NF's</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }}>
                    <LinearGradient style={styles.MenuProduto}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="ios-documents" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText1}>GR's</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { Alert.alert(title = "Aviso", "Serviço na versão Beta") }} >
                    <LinearGradient style={styles.MenuProduto1}
                        // Background Degrade
                        colors={['rgba(64, 212, 242, 0.2)', 'rgba(43, 71, 252, 0.8)', 'rgba(64, 212, 242, 0.6)']}>
                        <Ionicons name="ios-receipt-sharp" size={50} color="#fff" left={25} top={15} position='absolute' />
                        <Text style={styles.buttonText2}>Relatórios</Text>
                    </LinearGradient>
                </TouchableOpacity>

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
    button: {
        width: "100%",
        borderRadius: 12,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFFFFE",
        fontSize: 13,
        fontWeight: "bold",
        top: 60,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    CadastroFinanceiro: {
        position: 'absolute',
        backgroundColor: 'rgba(43, 71, 252, 0.3)',
        width: 100,
        height: 100,
        top: 15,
        borderRadius: 10,
        padding: 10,
        left: 5


    },
    MenuProduto: {
        position: 'absolute',
        backgroundColor: 'rgba(43, 71, 252, 0.3)',
        width: 100,
        height: 100,
        top: -15,
        borderRadius: 10,
        padding: 10,
        left: 127,
    },
    MenuProduto1: {
        position: 'absolute',
        backgroundColor: 'rgba(43, 71, 252, 0.3)',
        width: 100,
        height: 100,
        top:-45,
        borderRadius: 10,
        padding: 10,
        left: 250,
    },
    buttonText1: {
        color: "#FFFFFE",
        fontSize: 13,
        fontWeight: "bold",
        top: 60,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    buttonText2: {
        color: "#FFFFFE",
        fontSize: 13,
        fontWeight: "bold",
        top: 60,
        marginLeft: 'auto',
        marginRight:'auto',
    
    

    },
})