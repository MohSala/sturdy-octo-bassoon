import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TransactionModal from './modals/TransactionModal';
import { userActions } from '../_actions';

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
            {/* <h1>Hi {user.firstName}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>  */}
            <div style={{ width: "100%", backgroundColor: "#00008B", height: '100px' }}>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: 10, alignItems: "center" }}>
                    <div style={{
                        border: "2px solid grey", borderRadius: 50,
                        height: 60, width: 60, marginTop: 10, backgroundColor: "#fff",
                        display: "flex", justifyContent: "center", alignItems: "center",
                    }}>
                        <h4 style={{ textAlign: "center" }}>MS</h4>
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
                    <button className="btn col-md-5" style={{
                        height: 100, backgroundColor: "#3DB86E", color: "#fff"
                        , fontWeight: "bolder"
                    }}>
                        SEND MONEY
                    </button>
                    <button className="btn col-md-5"
                        style={{
                            backgroundColor: "#00008B", color: "#fff",
                            height: 100, fontWeight: "bolder"
                        }}>
                        ADD MONEY
                    </button>
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