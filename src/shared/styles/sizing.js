const _size = {
    auto: 'auto',
    small: '25px',
    medium: '50px',
    large: '100px',
    full: '100%'
};

const width = {
    ..._size
};

const height = {
    ..._size,
    full: '100vh'
};

export { height, width };