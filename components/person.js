import React from 'react'
import Image from "next/image";

export default function Person(props) {
    return (
        <div>
            <h2 className="person-position">{props.position}</h2>
            <Image
                src={props.image}
                height={200}
                width={200}
            />
            <h4>{props.name}</h4>
            <h4>{props.email}</h4>
        </div>
    );
};