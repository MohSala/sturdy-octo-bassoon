import React from "react";

const InputWrapper = ({field, handleChange, isPin}) => {
    return (
            <input type={field.type}
                   name={field.id}
                   value={field.value}
                   className="form-control"
                   onChange={handleChange}
                // required
            />
    )
}

const PinWrapper = ({pinDigits, pinFields, handleChange}) => {
    const items = [];
    for (let i = 0; i < pinDigits; i++) {
        items.push(
            <div className="col" key={i}>
                <InputWrapper field={pinFields} handleChange={handleChange}/>
            </div>
        )
    }
    // validate pin
    return (
        <div className="form-group">
            <label>{pinFields.label}</label>
            <div className="row">
                {items}
            </div>
        </div>
    )
}
export const FormInput = ({
                              formFields,
                              handleSubmit,
                              isCard, pinFields,
                              pinDigits, handleChange,
                              transferFunds
}) => {
    return(
        <form name="form" onSubmit={handleSubmit}>
            {formFields.map((field) => (
                <div className="form-group" key = {field.id}>
                    <label>{field.label}</label>
                    <div className="input-group has-validation">
                        {field.name === "recipient" &&
                            <span className="input-group-text" >$</span>
                        }
                        <InputWrapper
                            field={field}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            ))}
            {!isCard ? <PinWrapper
                pinFields={pinFields}
                pinDigits={pinDigits}
                handleChange={handleChange}
            /> : ''}
            <div className="form-group">
                <button className="btn btn-primary">
                    {transferFunds ? 'SUBMIT' : 'VERIFY' }
                </button>
            </div>
        </form>
    )
}