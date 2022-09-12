import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'

type UserType = {
    id: number;
    name: string;
};

export default function App() {

    // User情報をstateに取得する
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const getUser = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        setUsers(users);
        //console.log(users);
        };
        getUser();
    }, []);

    return (
        <View>
            {users.map((user) => (
                <Text key={user.id}>{user.name}</Text>
            ))}
        </View>
    )
}
