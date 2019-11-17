export const fetchFrames = () => ({
    type: 'FETCH_FRAMES',
});

export const selectFrame = frameId => ({
    type: 'SELECT_FRAME',
    payload: frameId,
});
