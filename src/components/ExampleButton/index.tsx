import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

import styles from './styles';

export type ExampleButtonProps = {
  label: string,
  onCallToAction?: { (): void },
};

const ExampleButton: React.FC<ExampleButtonProps> = (props) => {
	const { label, onCallToAction } = props;

	const handleCallToAction = () => {
		if (onCallToAction) onCallToAction();
	};

	return (
		<TouchableHighlight
			testID="button-container"
			style={ styles.container } 
			onPress={ handleCallToAction }
		>
			<Text style={ styles.label }>{label}</Text>
		</TouchableHighlight>
	);
};

export default ExampleButton;
