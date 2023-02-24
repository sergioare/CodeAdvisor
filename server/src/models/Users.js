class User{
    constructor(Uid, Nickname, Img, Firstname, Lastname, About ){
        this.Uid        = Uid
        this.NickName   = Nickname
        this.Img        = Img
        this.Firstname  = Firstname
        this.Lastname   = Lastname
        this.About      = About
    }
}


module.exports = {
    User
};