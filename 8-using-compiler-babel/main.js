class User {
    constructor({ email }) {
        this.email = email
    }

    sendMessage() {
        console.log("Mensagem enviada para:", this.email)    
    }
}

const user = new User({ email: "leane@email.com" })
user.sendMessage()