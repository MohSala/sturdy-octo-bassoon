import { depositMoneyConstants } from '../_constants';
import {depositMoneyService } from '../_services';
import { alertActions } from './';

export function depositMoney(amount){
    return dispatch => {
        dispatch(request(amount));
        dispatch(success({
            amount: 5000
            }));
        // depositMoneyService.deposit(amount)
        //     .then(
        //         data => {
        //             dispatch(success(data));
        //             dispatch(alertActions.success('Deposit successful'));
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    function request(amount) { return { type: depositMoneyConstants.DEPOSIT_MONEY_REQUEST, amount } }
    function success(data) { return { type: depositMoneyConstants.DEPOSIT_MONEY_SUCCESS, data } }
    function failure(error) { return { type: depositMoneyConstants.DEPOSIT_MONEY_FAILURE, error } }
}

export function verifyPin(pin){
    return dispatch => {
        dispatch(request(pin));
        dispatch(success());
        // depositMoneyService.verifyPin(pin)
        //     .then(
        //         data => {
        //             dispatch(success());
        //             dispatch(alertActions.success('Verification successful'));
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    function request(pin) { return { type: depositMoneyConstants.VERIFY_PIN_REQUEST, pin } }
    function success() { return { type: depositMoneyConstants.VERIFY_PIN_SUCCESS } }
    function failure(error) { return { type: depositMoneyConstants.VERIFY_PIN_FAILURE, error } }
}

export function verifyCard({cardNo, expDate, cvc}){
    return dispatch => {
        dispatch(request({cardNo, expDate, cvc}));
        // dispatch(success(data));
        depositMoneyService.verifyCard({cardNo, expDate, cvc})
            .then(
                data => {
                    dispatch(success(data));
                    dispatch(alertActions.success('Card verification successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(pin) { return { type: depositMoneyConstants.VERIFY_CARD_REQUEST, pin } }
    function success(data) { return { type: depositMoneyConstants.VERIFY_CARD_SUCCESS, data } }
    function failure(error) { return { type: depositMoneyConstants.VERIFY_CARD_FAILURE, error } }
}