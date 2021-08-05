import React from 'react';
import { TouchableOpacity, Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Action } from 'typesafe-actions';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../redux';
import { Item } from '../../redux/list/types';
import * as ListActions from '../../redux/list/actions';

interface StoreProps {
  data: Item[]
  error: boolean
}

interface DispatchProps {
  addList(): Action,
}

type Props = StoreProps & DispatchProps;
const CounterComponent: React.FC<Props> = ({ data, addList }) => {
	console.log('ccccc', data);
	return (
		<View>
			<TouchableOpacity onPress={ ()=>addList() }>
				<Text>Adicionar Lista ai show</Text>
			</TouchableOpacity>
			<FlatList<Item>
				data={ data }
				keyExtractor={ (item, index): string => (index).toString() }
				renderItem={ ({ item }: { item: Item }) => <Text>* {item.text}</Text> }/>
		</View>
	);
};

const mapStateToProps = (store: ApplicationState) => ({
	data: store.list.data,
	error: store.list.error,
});

const mapDispatchToprops = (dispatch: Dispatch) =>
	bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToprops)(CounterComponent);
