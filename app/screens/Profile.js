'use strict'
import React, { Component } from 'react'
import {
    Text, Image, View, StyleSheet, TouchableOpacity
} from 'react-native'

import { Icon } from 'native-base'

import Container from './../components/Container'

export default class Profile extends Component {
    render() {
        return (
            <Container>
                <View style={styles.holder}>
                    <Image style={styles.avatar} source={{ uri: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/p240x240/18952973_1715620681785586_3780799588093702898_n.jpg?oh=25f15720aeee302d7040bf53cd5e8100&oe=59F0578E' }} />
                    <Text style={styles.username}>Nick Vo, 29</Text>
                    <Text style={styles.description}>Senior Developer at Yummypin</Text>
                    <Text style={styles.description}>University of Information Technology - HCM International University</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={[ styles.buttonHolder, {borderRightWidth: 1, borderColor: '#f5f7fa'} ]}>
                            <TouchableOpacity style={styles.button}>
                                <Icon style={styles.icon} name="md-settings" />
                            </TouchableOpacity>
                            <Text style={styles.btnLabel}>SETTINGS</Text>
                        </View>

                        <View style={styles.buttonHolder}>
                            <TouchableOpacity style={styles.button}>
                                <Icon style={styles.icon} name="md-create" />
                            </TouchableOpacity>
                            <Text style={styles.btnLabel}>EDIT INFO</Text>
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    holder: {
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    username: {
        fontSize: 24,
        paddingTop: 10
    },
    description: {
        fontSize: 16,
        paddingTop: 8,
        textAlign: 'center'
    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        marginTop: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f5f7fa'
    },
    icon: {
        color: '#c3c8d0'
    },
    btnLabel: {
        color: '#c3c8d0',
        fontSize: 16,
        paddingTop: 8
    }
})
