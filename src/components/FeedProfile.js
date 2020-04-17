import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

export default props => {
    console.debug(props.posts)
    const posts = props.posts.map(post => {
         return <Image source={{ uri: post.image }} key={post.id} style={styles.image}/>
    })
    return <View style={styles.container}>{posts}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        height: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width / 3,
        borderWidth: 0.5,
        borderColor: '#FFF',
    }
})
