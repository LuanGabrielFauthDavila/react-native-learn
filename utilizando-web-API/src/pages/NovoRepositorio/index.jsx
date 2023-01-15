import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

//COMPONENTS
import TopBar from '../../components/TopBar';

//API
import api from '../../services/api';


const { width, height } = Dimensions.get('screen')


export default function NovoRepositorio () {
    const [name, setName] = useState('');
    const [created, setCreated] = useState('');
    const route = useRoute();

    async function postRepo () {
        const req = await api.post('/repos', {
            name: name,
            data: created,
            postId: route.params.id
        }).then((response) => {
            setName('')
            setCreated('')
        }).catch(() => {
            console.log('erro ao postar repositorio')
        })
    }

    return (
        <View style={styles.main}>
            <View style={styles.view}>
                <View>
                    <TextInput value={name} onChangeText={name => setName(name) } style={styles.input} label="Nome do Repositório"  />
                    <TextInput value={created} onChangeText={created => setCreated(created)} style={styles.input} placeholder="Data de criação" />
                </View>
                <Button 
                    mode="contained"
                    onPress={() => { postRepo(name, created) }}>
                        Gravar
                </Button>
            </View>
            <TopBar title={'Novo Repositório'} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 56,
        alignItems: 'center',
    },
    view: {
        flex: 1,
        paddingTop: '20%',
    },
    input: {
        width: width*0.85,
        marginBottom: 16,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#179d17',
        marginTop: 60,
        width: width*0.9,
        height: height*0.06,
        borderRadius: 6,
        marginBottom: 32
    },
    btnTxt: {
        color: "#F6F6F6",
        fontSize: 16
    },
})