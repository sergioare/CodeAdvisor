
class Item {
    constructor(id, Day, EndingHour, firstName, Month,
        Price, StartingHour, Year, aId, hours, status , techskill ) {
            this.id = id;
            this.Day = Day; 
            this.EndingHour = EndingHour;
            this.firstName = firstName;
            this.Month = Month;
            this.Price = Price;
            this.StartingHour = StartingHour;
            this.Year = Year;
            this.aId = aId;
            this.hours = hours;
            this.status = status;
            this.techskill = techskill;
    }
}

module.exports = Item;