import React, { useState } from "react";
import UserProfile from "./UserProfile";

function UserApp() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h2>Lab 3.2: Data Loading with useEffect</h2>
      
      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}>
          Random User
        </button>
      </div>

      <UserProfile userId={userId} />

      {/* 
        EXPLANATION (Task 3 Requirement):
        The userId is in the dependency array of useEffect. 
        This ensures that whenever the button is clicked and the state userId changes, 
        the effect re-runs to fetch new data.
      */}
    </div>
  );
}

export default UserApp;
