import React, {useState} from "react";

import { FormInput } from "../_components/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {verifyCard} from "../_actions/depositMoneyActions";


export const AddCard = () => {
    const [addCardInputs, setAddCardInputs] = useState({
        cardNo:"",
        expDate: "",
        cvc:""
    });
    const [submitted, setSubmitted] = useState(false);
    const { cardNo, expDate, cvc } = addCardInputs;
    const dispatch = useDispatch();
    const formFields =[
        {
            id: "cardNo",
            type: "text",
            label: "Card Number"
        },
        {
            id: "expDate",
            type: "text",
            label: "ExpiryDate"
        },
        {
            id: "cvc",
            type: "text",
            label: "CVC"
        },
    ]

    const handleSubmit = (e) =>  {
        e.preventDefault();

        setSubmitted(true);
        if (cardNo && expDate && cvc) {
            // get return url from location state or default to home page
            // const { from } = location.state || { from: { pathname: "/" } };
            dispatch(verifyCard({cardNo, expDate, cvc}));
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddCardInputs((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            }
        })
    }
    return(
        <div className="card">
            <div className="card-header">
                ADD CARD
            </div>
            <div className="card-body">
                <FormInput
                    formFields={formFields}
                    isCard={true}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}