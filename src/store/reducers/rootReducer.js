const initState = {
    users: [
        { id: 1, name: 'Bach' },
        { id: 2, name: 'Hoi Dan IT' },
        { id: 3, name: 'Hoi Dan IT với Bach' }
    ]
}

// state là nơi lưu trữ data của redux
// action là từ react truyền action lên ntn
const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer
