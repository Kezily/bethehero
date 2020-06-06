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
      alignItems: 'center'
   },

   headerText: {
      fontSize: 15,
      color: '#737380',
   },

   headerTextBold: {
      fontWeight: 'bold'
   },

   title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 16,
      marginTop: 48,
      color: '#13131A'
   },

   description: {
      color: '#737380',
      fontSize: 16,
      lineHeight: 24,
   },

   incidentList: {
      marginTop: 32,
   },

   incident: {
      padding: 24,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: '#fff',
   },

   incidentProperty: {
      color: '#41414d',
      fontSize: 14,
      fontWeight:'bold'
   },

   incidentValue: {
      marginTop: 8,
      marginBottom: 24,
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
});