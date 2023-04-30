import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllContacts, getSingleContact, deleteContact } from '../redux/actions/contacts_action'
import AddEditContact from './AddEditContact'

const Contacts = ({ getAllContacts, contact, getSingleContact, deleteContact, contacts }) => {

    useEffect(() => {
        getAllContacts()
    }, [])
    const deleteHandler = (index) => {
        const confirm = window.confirm("Are you sure you want to delete this contact?")
        if (confirm) {
            deleteContact(index);
        }
    }

    // const contact = [{
    //     name: "Sarath",
    //     phoneNumber: "123456345",
    //     email: "sarath@gmail.com"
    // }]
    return (
        <div>
            <div className='container d-flex flex-row justify-content-between mt-4'>
                <h1>All Contacts</h1>
                <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModalCenter">+ Add Contact</button>
            </div>
            <div className='container mt-4'>
                {contact.length === 0 && <p className='text-danger text-center'>No Contacts Found</p>}
                {contact.length > 0 &&
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModalCenter" onClick={() => getSingleContact(index)}>Edit</button> &nbsp;
                                        <button className='btn btn-danger' onClick={() => deleteHandler(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                }
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <AddEditContact editContactData={contacts} />
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStatetoProps = (state) => {
    return {
        contact: state.contact,
        contacts: state.contacts
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        getAllContacts: () => dispatch(getAllContacts()),
        getSingleContact: (index) => dispatch(getSingleContact(index)),
        deleteContact: (index) => dispatch(deleteContact(index))
    }
}
export default (connect(mapStatetoProps, mapDispatchtoProps))(Contacts)