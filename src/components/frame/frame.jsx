import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFrame } from '../store/actions';
import './frame.scss';
import { HashTag } from '../../helpers/hashtag';
import Form from './form';
import { ReactComponent as LikeIcon } from '../../assets/svg/like.svg';
import { ReactComponent as CommentIcon } from '../../assets/svg/comment.svg';

const Frame = () => {
    const dispatch = useDispatch();
    const frame = useSelector(state => state.selectedFrame);

    const text = frame && HashTag(frame.desc);
    const fileName = frame && `../../assets/images/${frame.image}`;

    var id = window.location.href.split('/')[
        window.location.href.split('/').length - 1
    ];

    useEffect(() => {
        dispatch(selectFrame(id));
    });

    return (
        <div className="frame-container">
            <div className="frame">
                <img src={fileName} className="frame__image"></img>

                <div className="frame__info-panel">
                    <div className="frame__desc">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: text || text,
                            }}
                        ></p>
                        <div className="frame__props">
                            <div className="frame__prop-item">
                                <LikeIcon />
                                <div className="value">
                                    {frame && frame.likeCount}
                                </div>
                            </div>
                            <div className="frame__prop-item">
                                <CommentIcon />
                                <div className="value">
                                    {frame && frame.commentCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    );
};

export default Frame;
