

class User {
<<<<<<< HEAD
    constructor(id, Username, Password, Name, Lastname,
        StatusAdviser, StatusAdmin,Reviews ) {
=======
    constructor(id, Username, Password, Name, Lastname, StatusAdviser, StatusAdmin ) {
>>>>>>> ade708211bfcec29742ccb751c183e6ed26be972
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