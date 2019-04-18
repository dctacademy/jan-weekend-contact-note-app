import React from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'

class ContactShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            contact: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`http://localhost:3005/contacts/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => this.setState(() => ({ contact: response.data })))
    }

    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if(confirm) {
            const id = this.props.match.params.id 
            axios.delete(`http://localhost:3005/contacts/${id}`, {
                headers: {
                    'x-auth' : localStorage.getItem('token')
                }
            })
            .then(response => {
                this.props.history.push('/contacts')
            })
        }
    }

    render(){
        return (
            <div>
                <h2> { this.state.contact.name } </h2>
                <p> { this.state.contact.mobile } </p>
                <p> { this.state.contact.email } </p> 

                <Link to="/contacts"> back </Link>

                <Link to={`/contacts/edit/${this.state.contact._id}`}> edit </Link>

                <button className="btn btn-danger" onClick={() => {
                    this.handleRemove()
                }}>remove</button>
            </div> 
        )
    }
}

export default ContactShow