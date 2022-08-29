const checkIfUndefined = (object, callback) => {
    if (object === undefined) {
        return "";
    } else {
        return callback(object);
    };
};

export default checkIfUndefined;