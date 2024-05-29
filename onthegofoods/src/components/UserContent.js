import React from 'react';

function UserContent({ user }) {
    return (
      <div>
         {user && (
        <div>
          <h2>Welcome, {user.email || 'User'}!</h2>
          {/* Display additional user-related information */}
        </div>
      )}
      </div>
    );
}

export default UserContent;
