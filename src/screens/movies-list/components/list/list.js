import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { ListItem } from '../movie-list-item';

export const ListComponent = (props) => {

    const { data, loadMoreHandler, isLoading } = props;

    return (
        isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text>Loading ...</Text>
            </View >
        )
            : (
                <FlatList
                    data={data}
                    keyboardShouldPersistTaps='handled'
                    keyExtractor={(item) => `movie-list-${item.id}`}
                    listKey={Math.random().toString()}
                    onEndReached={loadMoreHandler}
                    renderItem={({ item }) => (
                        <ListItem
                            item={item}
                        />
                    )}
                />
            )

    )
};