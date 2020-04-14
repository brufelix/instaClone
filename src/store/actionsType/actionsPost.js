import { SET_POSTS, CREATING_POST, POST_CREATED } from './actionsType'
import { setMessage } from './actionsMessage'
import axios from 'axios'

export const addPost = post => {
    return (dispatch, getState) => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-react-native-clone.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        }).catch(err => {
            dispatch(setMessage({
                title: 'erro',
                text: 'Erro inesperado'
            }))
        })
        .then( res => {
            post.image = res.data.imageUrl
            axios.post(`/posts.json?auth=${getState().user.token}`, { ...post } )
                .then(res => {
                    dispatch(fecthPosts())
                    dispatch(postCreated())
                    dispatch(setMessage({
                        title: 'Sucesso',
                        text: 'New Post!'
                    }))
                })
                .catch( err => {
                    dispatch(setMessage({
                        title: 'erro',
                        text: 'Erro inesperado'
                    }))
                })
        })

    }
}

export const addComment = payload => {
    return dispatch => {
        axios.get(`/posts/${payload.postId}.json`)
            .catch(err => console.log(err))
            .then( res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
                    .catch(err => {
                        dispatch(setMessage({
                            title: 'erro',
                            text: 'erro inesperado'
                        }))
                    })
                    .then( res => {
                        dispatch(fecthPosts())
                    })
            })
    }
}

export const setPost = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
} 

export const fecthPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => {
                dispatch(setMessage({
                    title: 'erro',
                    text: 'erro inesperado'
                }))
            })
            .then(res => {
                const rawPosts = res.data
                const posts = []
                for ( let key in rawPosts ) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }
                dispatch(setPost(posts.reverse()))
            })
    }
} 

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return  {
        type: POST_CREATED
    }
}