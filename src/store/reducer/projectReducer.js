const initState = {
    projects: [
    {id: '1', title: 'help me find Peach', content: 'wear your best shoes'},
    {id: '2', title: 'collect all the stars', content: 'jump high'},
    {id: '3', title: 'egg hunt with Yoshi', content: 'Yoshi is the worst mom'}
    ]
}
const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer