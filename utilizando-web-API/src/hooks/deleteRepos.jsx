import api from '../services/api';


export default async function deleteRepos (id) {
    if (!id) { return 0 }
    
    const data = await api.delete(`/repos/${id}`).then((response) => {
        return response.data
    }).catch(() => {
        return { detail: 'error'}
    })
    return data
}