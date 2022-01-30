import React from 'react';

function Customer(props){
    return (
        <div>
            <CustomerProfile id={props.id} src={props.src} name={props.name}/ >
            <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job}/ >
        </div>
    )
}

function CustomerProfile(props){
    return(
        <div>
            <img src={props.src} alt="profile image"/>
            <p>{props.name} [{props.id}]</p>
        </div>
    )
}

function CustomerInfo(props){
    return(
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}
export default Customer;
