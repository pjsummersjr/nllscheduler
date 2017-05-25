export interface month {
    name: string;
    active: boolean;
}

export interface team {
    name: string;
}

export interface location {
    fieldName: string;
    street: string;
    longitude: number;
    latitude: number;
}

export interface game {
    home: team;
    visitor: team;
    location: location;
    gameDate: string;
}

export interface day {
    date: string;
    dayOfWeek: string;
}



export class ScheduleData {
    private months : string[] = ["May","June"];

    private teams : team[] = [
        { name: "Angels" },
        { name: "Blue Jays"},
        { name: "Braves"},
        { name: "Cardinals"},
        { name: "Cubs"},
        { name: "Giants"},
        { name: "Mets" },
        { name: "Orioles" },
        { name:"Phillies"},
        { name: "Red Sox"},
        { name: "Tigers" },
        { name: "Yankees"},
    ]

    private dates : day[] = [
        {date:"5/1/2017", dayOfWeek: "Monday"},
        {date: "5/3/2017", dayOfWeek: "Wednesday"},
        {date: "5/8/2017", dayOfWeek: "Monday" },
        {date: "5/10/2017", dayOfWeek: "Wednesday" },
        {date: "5/15/2017", dayOfWeek: "Monday" },
        {date: "5/17/2017", dayOfWeek: "Wednesday" },
        {date: "5/22/2017", dayOfWeek: "Monday" },
        {date: "5/24/2017", dayOfWeek: "Wednesday" },
        {date: "5/29/2017", dayOfWeek: "Monday" },
        {date: "5/31/2017", dayOfWeek: "Wednesday" },
        {date: "6/5/2017", dayOfWeek: "Monday" },
        {date: "6/7/2017", dayOfWeek: "Wednesday" },
        {date: "6/12/2017", dayOfWeek: "Monday" },
        {date: "6/14/2017", dayOfWeek: "Wednesday" },
        {date: "6/19/2017", dayOfWeek: "Monday" },
        {date: "6/21/2017", dayOfWeek: "Wednesday"}
    ];

    constructor(){
        console.log("Initialized schedule data");
    }

    public GetMonths() : string[] {
        return this.months;
    }

    public GetTeams() : team[] {
        return this.teams;
    }

    public GetDates(): day[] {
        return this.dates;
    }

    public GetAllGames() : any[] {
        return games4;
    }

    public GetGamesByTeam(team: string) : game[] {
        console.log("Filter: " + team);
        
        let result = games4.filter(
            function(i,item){
                return (i.home == team || i.visitor == team);
            }
        );

        return result;
    }

}

const games: string = "[{\"hometeam\": \"One\",\"visitor\": \"Two\",\"date\": {\"month\": \"May\",\"day\": \"1\"},\"location\" : {\"name\": \"Murphy 1\",\"address\": \"1 Something St\",\"latitude\": \"1.3333\",\"longitude\": \"1.3333\"}},{\"hometeam\": \"Two\",\"visitor\": \"Two\",\"date\": {\"month\": \"May\",\"day\": \"1\"},\"location\" : {\"name\": \"Murphy 1\",\"address\": \"1 Something St\",\"latitude\": \"1.3333\",\"longitude\": \"1.3333\"}}]";
const games2: any = [
    {
        "month": "May",
        "day": 1,
        "matchups" : [
            {
                "home": "Team 1",
                "visitor": "Team 2",
                "location": {
                    "name": "Murphy 1",
                    "address": "1 Something St",
                    "latitude": 1.3333,
                    "longitude": 1.3333
                }
            }
        ]
    }
]

const games3 : any = [
    {
        month: "May",
        day: 1,
        home: "Team 1",
        visitor: "Team 2",
        location : {            
            name: "Murphy 1",
            address: "1 Something St",
            latitude: 1.3333,
            longitude: 1.3333
        }
    }
];

const games4: any[] = [{"dayOfWeek":"Monday","gameDate":"5/1/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Red Sox"},{"dayOfWeek":"Monday","gameDate":"5/1/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Cubs"},{"dayOfWeek":"Monday","gameDate":"5/1/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Phillies"},{"dayOfWeek":"Monday","gameDate":"5/1/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Yankees"},{"dayOfWeek":"Monday","gameDate":"5/1/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Blue Jays"},{"dayOfWeek":"Monday","gameDate":"5/1/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Giants"},{"dayOfWeek":"Wednesday","gameDate":"5/3/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Giants"},{"dayOfWeek":"Wednesday","gameDate":"5/3/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Orioles"},{"dayOfWeek":"Wednesday","gameDate":"5/3/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Cubs"},{"dayOfWeek":"Wednesday","gameDate":"5/3/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Cardinals"},{"dayOfWeek":"Wednesday","gameDate":"5/3/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Tigers"},{"dayOfWeek":"Wednesday","gameDate":"5/3/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Yankees"},{"dayOfWeek":"Monday","gameDate":"5/8/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Orioles"},{"dayOfWeek":"Monday","gameDate":"5/8/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Tigers"},{"dayOfWeek":"Monday","gameDate":"5/8/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Cubs"},{"dayOfWeek":"Monday","gameDate":"5/8/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Giants"},{"dayOfWeek":"Monday","gameDate":"5/8/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Braves"},{"dayOfWeek":"Monday","gameDate":"5/8/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Mets"},{"dayOfWeek":"Wednesday","gameDate":"5/10/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Cardinals"},{"dayOfWeek":"Wednesday","gameDate":"5/10/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Braves"},{"dayOfWeek":"Wednesday","gameDate":"5/10/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Orioles"},{"dayOfWeek":"Wednesday","gameDate":"5/10/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Giants"},{"dayOfWeek":"Wednesday","gameDate":"5/10/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Mets"},{"dayOfWeek":"Wednesday","gameDate":"5/10/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Yankees"},{"dayOfWeek":"Monday","gameDate":"5/15/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Angels"},{"dayOfWeek":"Monday","gameDate":"5/15/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Braves"},{"dayOfWeek":"Monday","gameDate":"5/15/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Cardinals"},{"dayOfWeek":"Monday","gameDate":"5/15/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Yankees"},{"dayOfWeek":"Monday","gameDate":"5/15/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Tigers"},{"dayOfWeek":"Monday","gameDate":"5/15/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Giants"},{"dayOfWeek":"Wednesday","gameDate":"5/17/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Angels"},{"dayOfWeek":"Wednesday","gameDate":"5/17/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Blue Jays"},{"dayOfWeek":"Wednesday","gameDate":"5/17/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Braves"},{"dayOfWeek":"Wednesday","gameDate":"5/17/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Cardinals"},{"dayOfWeek":"Wednesday","gameDate":"5/17/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Red Sox"},{"dayOfWeek":"Wednesday","gameDate":"5/17/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Orioles"},{"dayOfWeek":"Monday","gameDate":"5/22/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Orioles"},{"dayOfWeek":"Monday","gameDate":"5/22/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Mets"},{"dayOfWeek":"Monday","gameDate":"5/22/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Giants"},{"dayOfWeek":"Monday","gameDate":"5/22/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Red Sox"},{"dayOfWeek":"Monday","gameDate":"5/22/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Angels"},{"dayOfWeek":"Monday","gameDate":"5/22/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Tigers"},{"dayOfWeek":"Wednesday","gameDate":"5/24/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Cubs"},{"dayOfWeek":"Wednesday","gameDate":"5/24/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Cardinals"},{"dayOfWeek":"Wednesday","gameDate":"5/24/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Orioles"},{"dayOfWeek":"Wednesday","gameDate":"5/24/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Tigers"},{"dayOfWeek":"Wednesday","gameDate":"5/24/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Angels"},{"dayOfWeek":"Wednesday","gameDate":"5/24/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Phillies"},{"dayOfWeek":"Monday","gameDate":"5/29/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Mets"},{"dayOfWeek":"Monday","gameDate":"5/29/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Phillies"},{"dayOfWeek":"Monday","gameDate":"5/29/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Angels"},{"dayOfWeek":"Monday","gameDate":"5/29/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Cubs"},{"dayOfWeek":"Monday","gameDate":"5/29/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Yankees"},{"dayOfWeek":"Monday","gameDate":"5/29/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Red Sox"},{"dayOfWeek":"Wednesday","gameDate":"5/31/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Angels"},{"dayOfWeek":"Wednesday","gameDate":"5/31/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Blue Jays"},{"dayOfWeek":"Wednesday","gameDate":"5/31/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Orioles"},{"dayOfWeek":"Wednesday","gameDate":"5/31/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Cardinals"},{"dayOfWeek":"Wednesday","gameDate":"5/31/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Tigers"},{"dayOfWeek":"Wednesday","gameDate":"5/31/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Phillies"},{"dayOfWeek":"Monday","gameDate":"6/5/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Angels"},{"dayOfWeek":"Monday","gameDate":"6/5/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Blue Jays"},{"dayOfWeek":"Monday","gameDate":"6/5/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Red Sox"},{"dayOfWeek":"Monday","gameDate":"6/5/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Cardinals"},{"dayOfWeek":"Monday","gameDate":"6/5/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Mets"},{"dayOfWeek":"Monday","gameDate":"6/5/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Cubs"},{"dayOfWeek":"Wednesday","gameDate":"6/7/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Yankees"},{"dayOfWeek":"Wednesday","gameDate":"6/7/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Blue Jays"},{"dayOfWeek":"Wednesday","gameDate":"6/7/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Braves"},{"dayOfWeek":"Wednesday","gameDate":"6/7/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Giants"},{"dayOfWeek":"Wednesday","gameDate":"6/7/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Red Sox"},{"dayOfWeek":"Wednesday","gameDate":"6/7/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Phillies"},{"dayOfWeek":"Monday","gameDate":"6/12/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Blue Jays"},{"dayOfWeek":"Monday","gameDate":"6/12/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Braves","visitor":"Yankees"},{"dayOfWeek":"Monday","gameDate":"6/12/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Cardinals"},{"dayOfWeek":"Monday","gameDate":"6/12/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Cubs"},{"dayOfWeek":"Monday","gameDate":"6/12/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Mets"},{"dayOfWeek":"Monday","gameDate":"6/12/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Phillies"},{"dayOfWeek":"Wednesday","gameDate":"6/14/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Red Sox","visitor":"Blue Jays"},{"dayOfWeek":"Wednesday","gameDate":"6/14/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Cubs"},{"dayOfWeek":"Wednesday","gameDate":"6/14/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Tigers"},{"dayOfWeek":"Wednesday","gameDate":"6/14/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Braves"},{"dayOfWeek":"Wednesday","gameDate":"6/14/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Mets"},{"dayOfWeek":"Wednesday","gameDate":"6/14/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Phillies","visitor":"Orioles"},{"dayOfWeek":"Monday","gameDate":"6/19/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 2","fieldLongitude":"","fieldLatitude":""},"home":"Angels","visitor":"Giants"},{"dayOfWeek":"Monday","gameDate":"6/19/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Tigers","visitor":"Braves"},{"dayOfWeek":"Monday","gameDate":"6/19/2017","gameTime":"5:45 PM","location":{"fieldName":"Murphy 1","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Phillies"},{"dayOfWeek":"Monday","gameDate":"6/19/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Yankees","visitor":"Red Sox"},{"dayOfWeek":"Monday","gameDate":"6/19/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Blue Jays"},{"dayOfWeek":"Monday","gameDate":"6/19/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Mets"},{"dayOfWeek":"Wednesday","gameDate":"6/21/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF  2","fieldLongitude":"","fieldLatitude":""},"home":"Cubs","visitor":"Angels"},{"dayOfWeek":"Wednesday","gameDate":"6/21/2017","gameTime":"5:45 PM","location":{"fieldName":"Ben Hem Rear","fieldLongitude":"","fieldLatitude":""},"home":"Blue Jays","visitor":"Phillies"},{"dayOfWeek":"Wednesday","gameDate":"6/21/2017","gameTime":"5:45 PM","location":{"fieldName":"West","fieldLongitude":"","fieldLatitude":""},"home":"Cardinals","visitor":"Tigers"},{"dayOfWeek":"Wednesday","gameDate":"6/21/2017","gameTime":"5:45 PM","location":{"fieldName":"Navy OF","fieldLongitude":"","fieldLatitude":""},"home":"Mets","visitor":"Yankees"},{"dayOfWeek":"Wednesday","gameDate":"6/21/2017","gameTime":"5:45 PM","location":{"fieldName":"Sargent OF 1","fieldLongitude":"","fieldLatitude":""},"home":"Giants","visitor":"Braves"},{"dayOfWeek":"Wednesday","gameDate":"6/21/2017","gameTime":"5:45 PM","location":{"fieldName":"Johnson","fieldLongitude":"","fieldLatitude":""},"home":"Orioles","visitor":"Red Sox"}]