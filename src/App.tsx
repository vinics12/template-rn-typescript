import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';
import List from './screens/List';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({ name, baseEnthusiasmLevel = 0 }) => {
	const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(baseEnthusiasmLevel);

	const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
	const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

	const getExclamationMarks = (numChars: number) =>
		numChars > 0 ? Array(numChars + 1).join('!') : '';

	return (
		<Provider store={ store }>
			<View style={ styles.container }>
				<Text style={ styles.greeting }>
        Hello teste {name}
					{getExclamationMarks(enthusiasmLevel)}
				</Text>
				<View>
					<Button
						title="Increase enthusiasm"
						accessibilityLabel="increment"
						onPress={ onIncrement }
						color="blue"
					/>
					<Button
						title="Decrease enthusiasm"
						accessibilityLabel="decrement"
						onPress={ onDecrement }
						color="red"
					/>
					<List/>
				</View>
			</View>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	greeting: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 16,
	},
});

export default Hello;
