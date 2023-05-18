import React from "react";

export const TweetsCard = ({ id, avatar, tweets, user, followers }) => {
    console.log(user);
    return (
        <>
            <p>tweets={tweets}</p>
            <p>{user}</p>
            <p>{followers}</p>
        </>
    )
}