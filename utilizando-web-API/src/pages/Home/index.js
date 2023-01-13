import React, { useEffect, useState } from 'react';
import { 
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

//SERVICES
import api from '../../services/api';


export default function Home () {
    const [users, setUsers] = useState([])
    const navigation = useNavigation();

    async function Busca() {
        const response = await axios.get('http://127.0.0.1:3000/users')
        console.log(response)
        setUsers(response.data)
    }
    useEffect(() => {
        Busca()
    })

    return <>
        <FlatList 
            data={users}
            renderItem={({ item }) =>
                <TouchableOpacity
                    style={styles.btn}
                    // onPress={() => navigation.navigate('Perfil') } >
                    onPress={Busca()} >
                        <Text style={styles.btnTxt}>{ item.name }</Text>
                </TouchableOpacity>
            }
            ListHeaderComponent={() => {
                return (
                    <Text>Tamanho do array { users.length }</Text>
                )
            }} />

    </>
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#363636',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: 'white'
    }
})