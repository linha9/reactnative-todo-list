import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	topView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '20%'
	},

	textInput: {
		borderWidth: 1,
		padding: 3,
		marginRight: '3%',
		width: '60%'
	},

	button: {
  
	},

	bottomView: {
		backgroundColor: "#eeefff",
		paddingTop: 10,
		width: '100%',
		height: '80%',
		justifyContent: 'center',
		alignItems: 'center'
	},

	listView: {
		width: '100%'
	},

	card: {
		padding: 5,
		width: '90%',
		margin: 5,
		alignSelf: 'center',
		backgroundColor: "#aaaaaa"
	}
})

export default Styles;