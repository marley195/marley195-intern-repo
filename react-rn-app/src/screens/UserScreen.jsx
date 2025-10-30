import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { fetchUsers } from "../api/users";

export default function UserScreen() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || "Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <ActivityIndicator />;
  if (error)
    return (
      <View style={{ padding: 16 }}>
        <Text>{error}</Text>
        <Button title="Retry" onPress={loadUsers} />
      </View>
    );

  return (
    <View style={{ padding: 16 }}>
      {users.length ? (
        users.map((u) => <Text key={u.id}>{u.name}</Text>)
      ) : (
        <Text>No users yet.</Text>
      )}
      <Button title="Refresh" onPress={loadUsers} />
    </View>
  );
}
