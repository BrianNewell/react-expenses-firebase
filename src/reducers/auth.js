export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                userName: action.userDisplayName,
                userPhotoURL: action.userPhotoURL
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};