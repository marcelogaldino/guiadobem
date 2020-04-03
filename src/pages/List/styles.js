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
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowBack: {
        marginTop: 28
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
    },
    caseList: {
        marginTop: 8,
    },
    case: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 28
    },
    cardInfo: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24   
    },
    cardInfoValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },
    image: {
        padding: 12
    },
    detailsButton: {
        marginTop: 20,
        marginLeft: -15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#5137F2',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 15
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