import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
   },

   header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 48,
   },

   incident: {
      padding: 24,
      marginBottom: 24,
      borderRadius: 8,
      backgroundColor: '#fff',
   },

   incidentProperty: {
      marginTop: 24,
      color: '#41414d',
      fontSize: 14,
      fontWeight:'bold'
   },

   incidentValue: {
      marginTop: 8,
      color: '#737380',
      fontSize: 15,
   },

   detailsButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   detailsButtonText: {
      color: '#e02041',
      fontSize: 15,
      fontWeight: 'bold'
   },

   contactBox: {
      padding: 24,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: '#fff',
   },

   heroTitle: {
      color: '#13131a',
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 30,
   },

   heroDescription: {
      marginTop: 16,
      color: '#737380',
      fontSize: 15,
   },

   actions: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },

   actionWhastApp: {
      backgroundColor: '#25D366',
   },

   action: {
      backgroundColor: '#e04041',
      borderRadius: 8,
      width: '48%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },

   actionText: {
      marginLeft: 5,
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
   }
});