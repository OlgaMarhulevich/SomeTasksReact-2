import React from 'react'
import './lesson_4';
import {create, reject, resolve} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={() => create()}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={() => resolve()}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={() => reject()}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;