import React from 'react'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function List() {
    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Subject',
            recipients: 'email@email.com',
            body: 'message'
        })
    }

    function sendWhatsapp() {
        Linking.openURL('whatsapp://send?phone=+5544000000000&text=message')
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <Text style={styles.headerText}>
                    GUIA DO BEM 
                </Text>

            </View>

            <View style={styles.subHeader}>
                <Text style={styles.title}>Contato</Text>

                <TouchableOpacity style={styles.arrowBack} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#5137F2" />
                </TouchableOpacity>
            </View>

            <View style={styles.case}>
                <Text style={[styles.cardInfo, { marginTop: 0 }]}>Brigadeiro da Ana</Text>

                <Text style={styles.cardInfo}>Tipo de produto/serviço</Text>
                <Text style={styles.cardInfoValue}>Brigadeiros em geral</Text>

                <Text style={styles.cardInfo}>Responsável</Text>
                <Text style={styles.cardInfoValue}>Ana</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.phraseBox}>Faça sua parte!</Text>
                <Text style={styles.phraseBox}>Ajude a economia local :)</Text>

                <Text style={styles.description}>Entre em contato.</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}