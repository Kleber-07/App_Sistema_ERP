import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Carteira from './pages/Carteira';
import Relatorio from './pages/Relatorio';
import Registro from './pages/SignIn/Registro';
import Menu from './pages/Menu';
import Produto from './pages/Produto';
import CadastrarProduto from './pages/CadastroProduto';
import Cliente from './pages/Cliente';
import CadastrarCliente from './pages/CadastrarCliente';
import Descricao from './pages/Descricao';
import DescricaoPS from './pages/DescricaoPS';
import DescricaoCliente from './pages/DescricaoCliente';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Routes() {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#f7f7f7',
                    borderTopWidth: 0,
                    height: 70,

                }
            }}>

            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={40} color={color} />
                        }

                        return <Ionicons name='home-outline' size={30} color={color} />

                    }

                }}

            >
            </Tab.Screen>

            <Tab.Screen
                name='Cadastrar'
                component={Cadastrar}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Ionicons name='add-circle' size={40} color={color} />
                        }

                        return <Ionicons name='add-circle-outline' size={30} color={color} />
                    }
                }}
            >
            </Tab.Screen>



            <Tab.Screen
                name='Carteira'
                component={Carteira}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Ionicons name='ios-wallet' size={40} color={color} />
                        }

                        return <Ionicons name='ios-wallet-outline' size={30} color={color} />
                    }
                }}
            >


            </Tab.Screen>

            <Tab.Screen
                name='Relatorio'
                component={Relatorio}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Ionicons name='ios-reader' size={40} color={color} />
                        }

                        return <Ionicons name='ios-reader-outline' size={30} color={color} />
                    }
                }}>

            </Tab.Screen>

        </Tab.Navigator>

    );
}

function RoutesProduto() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#f7f7f7',
                    borderTopWidth: 0,
                    height: 70,

                }
            }}>

            <Tab.Screen
                name='Produto'
                component={Produto}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={40} color={color} />
                        }

                        return <Ionicons name='home-outline' size={30} color={color} />

                    }

                }}

            >
            </Tab.Screen>

            <Tab.Screen
                name='CadastrarProduto'
                component={CadastrarProduto}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Ionicons name='add-circle' size={40} color={color} />
                        }

                        return <Ionicons name='add-circle-outline' size={30} color={color} />
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}

function RoutesClientes() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#f7f7f7',
                    borderTopWidth: 0,
                    height: 70,

                }
            }}>

            <Tab.Screen
                name='Cliente'
                component={Cliente}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={40} color={color} />
                        }

                        return <Ionicons name='home-outline' size={30} color={color} />

                    }

                }}

            >
            </Tab.Screen>

            <Tab.Screen
                name='CadastrarCliente'
                component={CadastrarCliente}
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Ionicons name='add-circle' size={40} color={color} />
                        }

                        return <Ionicons name='add-circle-outline' size={30} color={color} />
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}
function Auth(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Registro"
                    component={Registro}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Menu"
                    component={Menu}
                // options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Routes"
                    component={Routes}
                // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RoutesProduto"
                    component={RoutesProduto}
                // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Descricao"
                    component={Descricao}
                // options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DescricaoPS"
                    component={DescricaoPS}
                // options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="RoutesClientes"
                    component={RoutesClientes}
                // options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="DescricaoCliente"
                    component={DescricaoCliente}
                // options={{ headerShown: false }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default Auth;
