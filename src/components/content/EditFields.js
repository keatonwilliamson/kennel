import React from 'react';
import PropTypes from 'prop-types';
import { firstLetterCase } from '../../modules/helpers'

const EditFields = ({ i, entryState, handleFieldChange }) => {
    return (
        <div key={`entry-${i}`}>
            <label htmlFor={`${i}`}>{firstLetterCase(`${entryState[i][0]}: `)}</label>
            <input type="text" required className="form-control" onChange={handleFieldChange} id={`${i}`} value={entryState[i][1]} />
        </div>
    )
}

EditFields.propTypes = {
    i: PropTypes.number,
    entryState: PropTypes.array,
    handleFieldChange: PropTypes.func

};

export default EditFields;