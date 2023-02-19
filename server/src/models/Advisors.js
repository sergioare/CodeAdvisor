
class Advisors {
    constructor(
        id, 
        Nickname, 
        Firstname, 
        Lastname, 
        Contact, 
        Img, 
        Residence, 
        Language, 
        Price, 
        Score, 
        About, 
        Specialty, 
        TechSkills, 
        Reviews
        ) {
            this.id         = id,
            this.Nickname   = Nickname,
            this.Firstname  = Firstname,
            this.Lastname   = Lastname,
            this.Contact    = Contact,
            this.Img        = Img,
            this.Residence  = Residence,
            this.Language   = Language,
            this.Price      = Price,
            this.Score      = Score,
            this.About      = About,
            this.Specialty  = Specialty,
            this.TechSkills = TechSkills
            this.Reviews    = Reviews
    }
}

class Reviwers {
    constructor(id, Name, Img, Reviwer, score,){
        this.id = id
        this.Name = Name
        this.Img = Img
        this.Reviwer = Reviwer
        this.score = score
    }
}


module.exports = {
    Advisors,
    Reviwers
};
