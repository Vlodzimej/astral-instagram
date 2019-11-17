import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './link.scss';

const LinkButton = props => {
    const { id, icon, value, onClick } = props;
    return (
        <div className="link">
            <Link
                to={{
                    pathname: `/frame/${id}`,
                }}
            >
                {icon && icon}
            </Link>
            <div className="value">
                {value}
            </div>
        </div>
    );
};

export default LinkButton;

LinkButton.propTypes = {
    icon: PropTypes.element,
    onClick: PropTypes.func,
    value: PropTypes.string.isRequired,
};
