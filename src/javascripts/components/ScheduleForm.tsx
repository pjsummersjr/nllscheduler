import * as React from 'react';

import {ScheduleData, team, day} from '../scheduledata';

import { Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export interface IFormProps {
    teams : team[];
    days: string[];
    dates: string[];
}

export interface ISchedState {
    teams : team[],
    days : string[],
    dates : day []
}

export class SchedForm extends React.Component<{}, ISchedState> {

    constructor(){
        super();

        this.state = {
            teams: [],
            days: [],
            dates: []
        }
    }

    public componentWillMount() : void {
        let data : ScheduleData = new ScheduleData();

        let tmpState = {
            teams: data.GetTeams(),
            days: [],
            dates: data.GetDates()
        }

        this.setState(tmpState);
    }

    public render() : React.ReactElement<{}>{
        console.log('Rendering form');
        return (
            <form>
            <Grid>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <FormGroup controlId="formTeamSelect">
                            <ControlLabel>Please select your team</ControlLabel>
                            <FormControl
                                componentClass="select" 
                                placeholder="Select a team">
                                <option value="select">Team...</option>
                                {this.state.teams.map((team, i) => {   
                                    return (
                                        <option key={i} value={team.name}>{team.name}</option>
                                    );
                                })}
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6} md={3} lg={3}>
                        <FormGroup controlId="formMonthSelect">
                            <ControlLabel>Month</ControlLabel>
                            <FormControl
                                componentClass="select" 
                                placeholder="Select a team">
                                <option value="select">Month...</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col sm={6} md={3} lg={3}>
                        <FormGroup controlId="formDaySelect">
                            <ControlLabel>Day</ControlLabel>
                            <FormControl
                                componentClass="select" 
                                placeholder="Select a team">
                                <option value="select">Day...</option>
                                {this.state.dates.map((gameday, i) => {
                                    return (
                                        <option key={gameday.date} value={gameday.date}>{gameday.date} ({gameday.dayOfWeek})</option>
                                    );
                                })}
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
            </form>
        );
    }
}