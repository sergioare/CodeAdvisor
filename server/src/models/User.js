

class User {
    constructor(id, Username, Password, Name, Lastname,
        StatusAdviser, StatusAdmin,Reviews ) {
            this.id = id;
            this.Username = Username;
            this.Password = Password;
            this.Name = Name;
            this.Lastname = Lastname;
            this.StatusAdviser = StatusAdviser;
            this.StatusAdmin = StatusAdmin;
            this.Reviews = Reviews;
        
    }
}

module.exports = User;