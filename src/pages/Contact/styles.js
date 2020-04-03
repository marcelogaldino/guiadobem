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
    title: {
        fontSize: 30,
        marginBottom: 8,
        marginTop: 28,
        color: '#13131A',
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
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
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },
    phraseBox: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5137F2',
        lineHeight: 30
    },
    description: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: '#5137F2',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
})