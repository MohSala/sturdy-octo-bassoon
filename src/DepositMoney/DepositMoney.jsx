import React, {useState} from "react";

import { FormInput } from "../_components/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {depositMoney, verifyPin} from "../_actions/depositMoneyActions";


export const DepositMoney = () => {
    const [depositMoneyInputs, setDepositMoneyInputs] = useState({
        amount:"",
        pin: []
    });
    const [submitted, setSubmitted] = useState(false);
    const { amount, pin } = depositMoneyInputs;
    const dispatch = useDispatch();
    const formFields =[
        {
            id: "amount",
            type: "text",
            label: "Amount",
            name: 'amount',
        },
    ]
    const pinFields = {
            id: "pin",
            type: "text",
            label: "PIN",
        }
    const handleSubmit = (e) =>  {
        e.preventDefault();
        setSubmitted(true);

        if (amount && pin) {
            dispatch(verifyPin(pin));
            dispatch(depositMoney(amount));
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDepositMoneyInputs((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            }
        })
    }

    return(
        <div className="card">
            <div className="card-header">
                DEPOSIT MONEY
            </div>
            <div className="card-body">
                {submitted && !amount && !pin && (
                    <div className="">
                        Please enter a  valid pin or amount
                    </div>
                )}
                <FormInput
                    formFields={formFields}
                    pinFields={pinFields}
                    pinDigits={4}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}