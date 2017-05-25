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
export declare class ScheduleData {
    private months;
    private teams;
    private dates;
    constructor();
    GetMonths(): string[];
    GetTeams(): team[];
    GetDates(): day[];
    GetAllGames(): any[];
    GetGamesByTeam(team: string): game[];
}
