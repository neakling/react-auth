import React from "react";

const Profile = () => {
    const username = localStorage.getItem("username").replace(/"/g, "");
    console.log(username);
    return (
        <div>
            <h1>Profile</h1>
            <h2>welcome, {username}!</h2>
        </div>
    );
};
export default Profile;
