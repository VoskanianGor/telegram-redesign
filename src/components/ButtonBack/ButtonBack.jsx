import React from "react";
import { Link } from "react-router-dom";
import style from "./ButtonBack.module.css";
import { ReactComponent as BackIcon } from "./Back.svg";

export const ButtonBack = ({ path }) => {
	return (
		<Link to={path} className={style.buttonBack}>
			<BackIcon />
		</Link>
	);
};
