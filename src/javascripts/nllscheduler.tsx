import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { SchedForm } from './components/ScheduleForm';
import { GameList } from './components/GameList';
import { VenueMap } from './components/Venue';

import { ScheduleData } from './scheduledata';

var mapReady : boolean = false;

export interface ISchedulerState {
    selectedMonth: string;
    selectedTeam: string;
    selectedDay: string;
}

export default class NLLScheduler extends React.Component<ISchedulerState, ISchedulerState> {    

    constructor() {
        super();
        console.log('Hello');
    }

    public componentWillMount() : void {
        this.setState(this.props);
    }

    public render() : React.ReactElement<{}>{
        return (
            <div>
                <SchedForm />
                <GameList SelectedMonth={this.state.selectedMonth} 
                    SelectedTeam={this.state.selectedTeam} 
                    SelectedDayOfWeek={this.state.selectedDay} />
                <VenueMap />
            </div>
        );
    }
}



function GetGameDateClosestToToday(){
    let today = new Date();
    let sData = new ScheduleData();
    let gameDates = sData.GetDates();

    let finalDate = null;
    let isSet = false;
    gameDates.forEach((item, i) => {
        let gameDate = new Date(item.date);
        if(!isSet){
            if(gameDate == today){
                finalDate = gameDate;
                isSet = true;
            }
            if(gameDate > today){
                console.log("Game date: " + gameDate + " Today: " + today);
                finalDate = gameDate;
                isSet = true;
            }
        }
    });
    return (finalDate.getMonth() + 1) + "/" + finalDate.getDate() + "/" + finalDate.getFullYear();
}
let closestDate = GetGameDateClosestToToday();
console.log(closestDate);
ReactDOM.render(<NLLScheduler selectedMonth="" selectedDay={closestDate} selectedTeam="Blue Jays"  />, document.getElementById('nllscheduler'));