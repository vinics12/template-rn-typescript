import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import mock from './ExampleButton.mock';

import ExampleButton from '..';

describe('given: ExampleButton', () => {
	test('should not trigger onCallToAction when it is not defined', () => {
		const { getByTestId } = render( <ExampleButton label={mock.label} /> );
	
		const button = getByTestId('button-container');
		
		fireEvent.press(button);
		expect(mock.callToAction).toHaveBeenCalledTimes(0);
	});
	test('should trigger onCallToAction when it is defined', () => {
		const { getByTestId } = render(
			<ExampleButton label={ mock.label } onCallToAction={ mock.callToAction } />
		);
	
		const button = getByTestId('button-container');
		
		fireEvent.press(button);
		expect(mock.callToAction).toHaveBeenCalledTimes(1);
	});
});
