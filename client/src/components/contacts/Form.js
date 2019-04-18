import React from 'react' 

class ContactForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: props.contact ? props.contact.name : '',
            email: props.contact ? props.contact.email : '',
            mobile: props.contact ? props.contact.mobile : '', 
            errors: props.contact ? props.contact.errors : {}
        }
        console.log('constructor',this.state)
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.handleSubmit(formData)
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }
    
    render() {
        return (
            <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>
                                name
                                <input type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="person name"
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label>
                                mobile
                                <input type="text"
                                    name="mobile"
                                    value={this.state.mobile}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="person mobile"
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label>
                                email
                                <input type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    placeholder="person email"
                                />
                            </label>
                        </div>

                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
        )
    }
}

export default ContactForm