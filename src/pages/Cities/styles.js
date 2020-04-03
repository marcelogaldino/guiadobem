import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: Constants.statusBarHeight + 8
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5137F2',
        borderRadius: 8
    },
    headerText: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 8,
        marginTop: 28,
        color: '#13131A',
        fontWeight: 'bold',
        marginLeft: 110
    },
    incidentList: {
        marginTop: 32,
    },
    incident: {
        padding: 14 ,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },
    image: {
        padding: 12
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#5137F2',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15
    },
    detailsCity: {
        marginRight: 15 
    },
    city: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsArrow: {
        marginLeft: 8
    }
})