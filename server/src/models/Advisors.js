

class Advisors {
    constructor(id, Contact, Nickname, Firstname, Lastname, Image, Price, Residence, Score, About, Specialty,TechSkills ) {
            this.id         = id;
            this.Nickname   = Nickname;
            this.Firstname  = Firstname;
            this.Lastname   = Lastname;
            this.Contact    = Contact;
            this.Image      = Image;
            this.Residence  = Residence;
            this.Price      = Price;
            this.Score      = Score;
            this.About      = About;
            this.Specialty  = Specialty;
            this.TechSkills = TechSkills;
    }
}

module.exports = Advisors;