import React from 'react'
import { Feather } from '@expo/vector-icons'    
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import logoImg from '../../assets/logo.png'
import confeitaria from '../../assets/confeitaria.png'
import hortifruti from '../../assets/hortifruti.png'


export default function Offers() {

    const navigation = useNavigation()

    function navigateToList() {
        navigation.navigate('list')
    }

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <Text style={styles.headerText}>
                    GUIA DO BEM 
                </Text>

            </View>

            <View style={styles.subHeader}>
                <Text style={styles.title}>Produtos/Servicos</Text>

                <TouchableOpacity style={styles.arrowBack} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#5137F2" />
                </TouchableOpacity>
            </View>

            <View style={styles.caseList}>
                
                <View style={styles.case}>

                    <View style={styles.image}>
                        <Image source={confeitaria} ></Image>
                    </View>

                    <View style={styles.city}>
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={ () => navigateToList()}
                        >
                        
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather style={styles.detailsArrow}name="arrow-right" size={16} color="#5137F2" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.case}>

                    <View style={styles.image}>
                        <Image source={hortifruti} ></Image>
                    </View>

                    <View style={styles.city}>
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={ () => navigateToList()}
                        >
                        
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather style={styles.detailsArrow}name="arrow-right" size={16} color="#5137F2" />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </View>
    )
}