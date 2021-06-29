import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TransactionModal from './modals/TransactionModal';
import { userActions } from '../_actions';
import { DepositMoney } from '../DepositMoney/DepositMoney';
import { TransferFunds } from '../TransferFunds/TransferFunds';
import UserProfile from './modals/UserProfile';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const [showBalance, setShowBalance] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div>
            <div style={{ width: "100%", backgroundColor: "#00008B", height: '100px' }}>
                <div data-toggle="modal" data-target="#userProfile"
                    style={{ display: "flex", justifyContent: "flex-end", padding: 10, alignItems: "center" }}>
                    <div style={{
                        border: "2px solid grey", borderRadius: 50,
                        height: 60, width: 60, marginTop: 10, backgroundColor: "#fff",
                        display: "flex", justifyContent: "center", alignItems: "center",
                    }}>
                        <h4 style={{ textAlign: "center" }}>MS</h4>
                    </div>
                </div>

                {/*User Modal Trigger */}
                <div class="modal fade" id="userProfile" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="depositMoneyLabel">USER PROFILE</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                    <h5 style={{ textAlign: "center" }}>
                                        YOUR TAG TO RECEIVE MONEY IS:
                                    </h5>

                                    <button className="btn" style={{
                                        marginTop: 30, backgroundColor: "#00008B",
                                        width: 300, alignSelf: "center", padding: 15,
                                        color: "#fff"
                                    }}>
                                        $BIGBREAD
                                    </button>

                                    {/* <Link to='/login' style={{ alignSelf: "center" }}>
                                        <button className="btn btn-outline-danger" style={{ marginTop: 60, width: 300, alignSelf: "center" }}>
                                            LOGOUT
                                        </button>
                                    </ Link> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                {/* available balance */}
                <div className="card col-md-6" style={{
                    borderRadius: 15,
                    border: "3px solid #E5E5E5",
                    marginTop: 10
                }}>
                    <div className="card-body" onClick={() => setShowBalance(!showBalance)}>
                        <h2 style={{
                            textDecorationLine: "underline",
                            fontFamily: "Raleway", fontWeight: "bolder"
                        }}>
                            Available Balance
                        </h2>
                        <h1 style={{ fontWeight: "bolder" }}>
                            {showBalance ? "********" : `$${Number(100000).toLocaleString()}`}
                        </h1>
                    </div>

                </div>
                {/* available balance */}

                {/* buttons */}
                <div className="col-md-6" style={{
                    display: "flex", flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 20
                }}>
                    <button className="btn col-md-5" data-toggle="modal" data-target="#transferFunds" style={{
                        height: 100, backgroundColor: "#3DB86E", color: "#fff"
                        , fontWeight: "bolder"
                    }}>
                        SEND MONEY
                    </button>
                    <button className="btn col-md-5" data-toggle="modal" data-target="#depositMoney"
                        style={{
                            backgroundColor: "#00008B", color: "#fff",
                            height: 100, fontWeight: "bolder"
                        }}>
                        ADD MONEY
                    </button>

                    {/*Deposit money Modal Trigger */}
                    <div class="modal fade" id="transferFunds" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="depositMoneyLabel">Transfer Funds</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <TransferFunds />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Deposit money Modal Trigger */}
                    <div class="modal fade" id="depositMoney" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="depositMoneyLabel">Deposit money</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <DepositMoney />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* buttons */}

                {/* Transactions */}
                <div className="col-md-6" style={{ marginTop: 50 }}>
                    <h4 style={{ textAlign: "left" }}>TRANSACTIONS</h4>

                    {/* transaction cards */}
                    <div className="card col-md-12" style={{
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                        borderRadius: 10,
                        marginTop: 20,
                        transition: "0.3s"
                    }}>
                        <div style={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", padding: 10
                        }}
                            data-toggle="modal" data-target="#exampleModal">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ width: 50, height: 50, backgroundColor: "#00008B", borderRadius: 50 }}>
                                </div>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <h5 style={{ marginLeft: 5, fontFamily: "Raleway", fontWeight: "bolder" }}>
                                        Wallet transfer from $frederick
                                    </h5>
                                    <h6 style={{ marginLeft: 5, fontFamily: "Raleway", textAlign: "left" }}>
                                        March 17 2019
                                    </h6>
                                </div>
                            </div>

                            <div style={{
                                display: "flex", justifyContent: "center",
                                alignItems: "center", textAlign: "center"
                            }}>
                                <h6 style={{ fontWeight: "bolder", color: "#3DB86E" }}>${Number(500).toFixed(2)}</h6>
                            </div>

                            {/*Transaction Modal Trigger */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Transaction Details</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <TransactionModal reference="2i3d38wdihcebw7g7948c" description="Fraud money from $frederick" amount={500} status="Successful" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </center>

            {/* MODAL TRIGGERS */}


        </div>
    );
}

export { HomePage };