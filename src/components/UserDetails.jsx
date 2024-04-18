import React from "react";
import "./UserDetails.css";

const UserDetails = ({user}) => {
	// const user = props.user;
	return (
		<div>
			<div className="img-container">
				<img src={user.image} alt={`avatar de ${user.name}`} />
			</div>
			<div className="personal section">
				<h2 className="personal__name">Nombre:{user.name}</h2>
				<p className="personal__address">Género: {user.gender}</p>
			</div>
			<p className="social__intro">Especie:{user.species}</p>
			<p className="social__status">Estatus:{user.status}</p>
		</div>
	);
};

export default UserDetails;