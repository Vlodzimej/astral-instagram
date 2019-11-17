export const HashTag = str => {
    return str.replace(
        /(^|\s)(#[a-z\d-]+)/gi,
        "$1<span class='hashtag'>$2</span>"
    );
};
