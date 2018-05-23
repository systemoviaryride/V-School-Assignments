import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state,
                data: [...state.data, ...action.comments],
                loading: false
            }
        case "ADD_COMMENT":
            return {
                ...state,
                data: [...state.data, action.comment],
                loading: false
            }
        case "DELETE_COMMENT":
            return {
                ...state,
                data: state.data.filter((comment) => comment._id !== action.idComment),
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                errMsg: action.errMsg,
                loading: false
            }
        default:
            return state
    }
}


// GET
export const getComments = () => {
    return dispatch => {
        axios.get(`/comments/`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "GET_COMMENTS",
                comments: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

// ADD
export const addComment = (comment) => {
    return dispatch => {
        axios.post(`/comments/`, comment)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "ADD_COMMENT",
                comment: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

// DELETE
export const deleteComment = (idComment) => {
    return dispatch => {
        axios.delete(`/comments/${idComment}`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "DELETE_COMMENT",
                idComment
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export default commentReducer;