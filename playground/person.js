function Player(data){
    this.firstName = data.firstName
    this.details = function(){
        return 'hi'
    }
}

Player.findById = function(){

}

const p1 = new Player({ firstName: 'Sachin'})
Player.findById()
// Contact Model 

const contact = new Contact({})

Contact.findById()