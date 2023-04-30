
const intialState = {
    contact: [{ name: "Sarath", phoneNumber: "123456345", email: "sarath@gmail.com" }],
    contacts: {},
}
export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CONTACTS':
            return { ...state }
        case 'ADD_CONTACT': {
            let contact = [...state.contact]
            contact.push(action.payload)
            return { ...state, contact }
        }
        case 'EDIT_CONTACT': {
            let contact = [...state.contact]
            contact[action.id] = action.payload;
            return { ...state, contact }
        }
        case 'DELETE_CONTACT': {
            let contact = [...state.contact]
            contact.splice(action.id, 1);
            return { ...state, contact }
        }
        case 'GET_SINGLE_CONTACT':
            return { ...state, contacts: { ...state.contact[action.index], id: action.index } }
        default:
            return state
    }
}