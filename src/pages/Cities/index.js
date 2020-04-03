import React from 'react'
import { Feather } from '@expo/vector-icons'    
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import logoImg from '../../assets/logo.png'
import maringa from '../../assets/maringa.png'
import campoGrande from '../../assets/campogrande.png'

export default function Cities() {

    const navigation = useNavigation()

    function navigateToOffers() {
        navigation.navigate('offers')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <Text style={styles.headerText}>
                    GUIA DO BEM 
                </Text>
                    
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>

            <View style={styles.incidentList}>
                
                <View style={styles.incident}>

                    <View style={styles.image}>
                        <Image source={maringa} ></Image>
                    </View>

                    <View style={styles.city}>
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={ () => navigateToOffers()}
                        >
                        
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather style={styles.detailsArrow}name="arrow-right" size={16} color="#5137F2" />
                        </TouchableOpacity>
                        <Text style={styles.detailsCity}>Maringa-PR</Text>
                    </View>
                </View>


                <View style={styles.incident}>

                    <View style={styles.image}>
                        <Image source={campoGrande} ></Image>
                    </View>

                    <View style={styles.city}>
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={ () => navigateToOffers()}
                        >
                        
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather style={styles.detailsArrow}name="arrow-right" size={16} color="#5137F2" />
                        </TouchableOpacity>
                        <Text style={styles.detailsCity}>Campo Grande-PR</Text>
                    </View>
                </View>


            </View>
        </View>
    )
}