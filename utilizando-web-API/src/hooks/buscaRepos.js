import api from '../services/api';


export default async function buscaRepos (id='') {
    if (id != '') { id = `/?postId=${id}`}
    
    const data = await api.get(`/repos/${id}`).then((response) => {
        return response.data
    }).catch(() => {
        return { detail: 'error'}
    })
    return data
}