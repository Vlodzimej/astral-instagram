import React from 'react';
import './element.scss';
import { ReactComponent as LikeIcon } from '../../../assets/svg/like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/svg/comment.svg';
import { HashTag } from '../../../helpers/hashtag';
import LinkButton from './link/link';

const Element = props => {
    const { desc, image, id, likeCount, commentCount } = props.data;
    const text = HashTag(desc);
    const fileName = `../../../assets/images/${image}`;
    return (
        <div className="element">
            <img src={fileName} className="element__image"></img>

            <div className="element__info-panel">
                <div className="element__desc">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: text || text,
                        }}
                    ></p>
                    <div className="element__props">
                        <LinkButton
                            id={id}
                            icon={<LikeIcon />}
                            value={likeCount}
                            onClick={() => {
                                console.log('1');
                            }}
                        />
                        <LinkButton
                            id={id}
                            icon={<CommentIcon />}
                            value={commentCount}
                            onClick={() => {
                                console.log('1');
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Element;
