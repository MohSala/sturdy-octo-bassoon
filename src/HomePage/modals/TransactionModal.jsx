import React from 'react'

const TransactionModal = (props) => {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item"><h6>Transaction Reference:</h6>{props.reference}</li>
                <li class="list-group-item"><h6>Description:</h6>{props.description}</li>
                <li class="list-group-item"><h6>Amount:</h6>${props.amount.toFixed(2)}</li>
                <li class="list-group-item"><h6>Status:</h6>{props.status}</li>
            </ul>
        </div>
    )
}

export default TransactionModal;
