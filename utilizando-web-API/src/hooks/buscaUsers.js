import api from '../services/api';


export default async function buscaUsers () {
    const data = await api.get('/users').then((response) => {
        return response.data
    }).catch(() => {
        return { detail: 'error'}
    })
    return data
}