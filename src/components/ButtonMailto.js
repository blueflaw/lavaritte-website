import React from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonMailto.css";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link className="ButtonMailto"
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;