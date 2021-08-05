import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import mock from './Counter.mock';

import Counter from '..';

describe('given: Counter', () => {
	test('should apply char correctly', () => {
		const { getByTestId } = render(<Counter />);
	
		const feedbackText = getByTestId('feedback-text');
		const increaseButton = getByTestId('button-increase');
		const decreaseButton = getByTestId('button-decrease');
		
		fireEvent.press(increaseButton);
		expect(feedbackText).toHaveTextContent(mock.char);
	
		fireEvent.press(decreaseButton);
		expect(feedbackText).not.toHaveTextContent(mock.char);
	
		fireEvent.press(decreaseButton);
		expect(feedbackText).not.toHaveTextContent(mock.char);
	});
});
