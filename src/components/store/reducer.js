import FrameData from './data';

const frames = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FRAMES':
            return { ...state, frames: FrameData };
        case 'SELECT_FRAME':
            return {
                ...state,
                selectedFrame: FrameData.find(
                    frame => frame.id == action.payload
                ),
            };
        default:
            return state;
    }
};

export default frames;
