import React, { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Task 2: AbortController for cleanup
    const controller = new AbortController();
    
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal }
        );
        
        if (!response.ok) throw new Error("Could not fetch user data");
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [userId]); // Task 3: Dependency array includes userId

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!user) return null;

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h4>User Profile</h4>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
}

export default UserProfile;
