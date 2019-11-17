import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Element from './element';
import './feed.scss';
import { fetchFrames } from '../store/actions';

const Feed = () => {
    const dispatch = useDispatch();
    const frames = useSelector(state => state.frames);

    useEffect(() => {
        dispatch(fetchFrames());
    });

    return (
        <div className="feed">
            {frames && frames.map(item => (
                <Element data={item} key={item.id} />
            ))}
        </div>
    );
};

export default Feed;
