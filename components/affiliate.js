import React from 'react';
import styles from '/styles/Mission.module.scss';
import Image from "next/image";

export default function Affiliate(props) {
    const { id, logo, name } = props;
  
    return (
      <a href={`affiliates.html#${id}`} className={styles["affiliate-icon"]} s>
        <Image
          src={logo}
          alt={`${name} Logo`}
          height="100%"
          width="100%"
        />
      </a>
    );
};
  