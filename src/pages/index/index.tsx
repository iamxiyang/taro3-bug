import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    onPageScroll() {
        console.log('onPageScroll');
    }

    onReachBottom() {
        console.log('onReachBottom');
    }

    render() {
        return (
            <View className='index'>
                <Text>Hello world!</Text>
                <View style={{height: '200vh'}}></View>
            </View>
        )
    }
}
