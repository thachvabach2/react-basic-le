const initState = {
    users: [
        { id: 1, name: 'Bach' },
        { id: 2, name: 'Hoi Dan IT' },
        { id: 3, name: 'Hoi Dan IT với Bach' }
    ],
    posts: []
}

// state là nơi lưu trữ data của redux
// action là từ react truyền action lên ntn
// prettier-ignore
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            users = users.filter((item, index) => {
                return item.id !== action.payload.id
            })
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = {id: id, name: `random - ${id}`}
            return {
                ...state, users: [...state.users, user ]
            }
        default:
            return state
    }
}

export default rootReducer
