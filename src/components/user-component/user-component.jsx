import React from "react";
import Card from "../card-component/card-component";
import UseFetch from "../../effects/use-fetch.effect";

const User = ({ id }) => {
    const user = UseFetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);

    return (
        <Card>
            {
                user ?
                    (
                        <div>
                            <h3>Name: {user.name}</h3>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    ) : (
                        <p>User not found</p>
                    )
            }
        </Card>
    )
};

export default User;