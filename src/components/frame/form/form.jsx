import React from 'react';
import './form.scss';

const Form = () => {
    return (
        <form className="form">
            <div className="form__item">
                <input type="text" className="form__item-input" required />
                <label class="form__item-label">username</label>
            </div>
            <div className="form__item">
                <input type="text" className="form__item-input" required />
                <label class="form__item-label">author</label>
            </div>
            <div className="form__item">
                <input type="text" className="form__item-input" required />
                <label class="form__item-label">comment</label>
            </div>
        </form>
    );
};

export default Form;
