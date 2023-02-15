

class User {
    constructor(id, Username, Password, Name, Lastname,
        StatusAdviser, StatusAdmin, ) {
            this.id = id;
            this.Username = Username;
            this.Password = Password;
            this.Name = Name;
            this.Lastname = Lastname;
            this.StatusAdviser = StatusAdviser;
            this.StatusAdmin = StatusAdmin;
        
    }
}

module.exports = User;