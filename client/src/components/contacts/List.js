import React from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios'

class ContactList extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3005/contacts', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState(() => ({
                    contacts: response.data
                }))
            })
    }
    render() {
        return (
            <div>
                <h2>Listing Contacts - { this.state.contacts.length } </h2>

                { this.state.contacts.length === 0 ? (
                    <div>
                        No contacts found. Add your first contact 
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th> # </th>
                                <th> Name </th>
                                <th> Mobile </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.contacts.map((contact, index) => {
                                return (
                                    <tr key={contact._id}> 
                                        <td> { index + 1 } </td> 
                                        <td> <Link to={`/contacts/${contact._id}`}> {contact.name} </Link> </td> 
                                        <td> { contact.mobile } </td>
                                        <td>
                                            <Link to={`/contacts/${contact._id}`}> 
                                                Show
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                ) } 

                <Link to="/contacts/new" className="btn btn-primary"> Add Contact </Link>
            </div>
        )
    }
}

export default ContactList