import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

const Counter: React.FC = () => {
	const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(0);

	const onIncrement = () => setEnthusiasmLevel((current) => (current + 1));
	const onDecrement = () => setEnthusiasmLevel((current) => (current > 0 ? current - 1 : 0));

	const getExclamationMarks = (numChars: number) =>
		numChars > 0 ? Array(numChars + 1).join('!') : '';

	return (
		<View style={ styles.container }>
			<Text style={ styles.greeting } testID="feedback-text">
				Hello teste {getExclamationMarks(enthusiasmLevel)}
			</Text>
			<View>
				<Button
					testID="button-increase"
					title="Increase enthusiasm"
					accessibilityLabel="increment"
					onPress={ onIncrement }
					color="blue"
				/>
				<Button
					testID="button-decrease"
					title="Decrease enthusiasm"
					accessibilityLabel="decrement"
					onPress={ onDecrement }
					color="red"
				/>
			</View>
		</View>
	);
};

export default Counter;
