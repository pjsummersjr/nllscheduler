import * as React from 'react';

import { ListGroup, ListGroupItem, Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap'

import {ScheduleData, game} from '../scheduledata';

export interface IGameState {
    games : game[];
}

export interface IGameListProps {
    SelectedMonth?: string;
    SelectedTeam?: string;
    SelectedDayOfWeek?: string;
}

export class GameList extends React.Component<IGameListProps, IGameState> {

    public constructor() {
        super();
        this.state = {
            games: []
        }
    }

    public componentDidMount(): void{
        this._loadGames();
    }

    private _loadGames(): void {
        let data : ScheduleData = new ScheduleData();

        let state: IGameState = {
            games: []
        };

        if((this.props.SelectedDayOfWeek == null || this.props.SelectedDayOfWeek == "") &&
            (this.props.SelectedMonth == null || this.props.SelectedMonth =="") && 
            (this.props.SelectedTeam == null || this.props.SelectedTeam == "")){
                state.games = data.GetAllGames();
        }
        else if((this.props.SelectedTeam != null && this.props.SelectedTeam.length > 0)){
            state.games = data.GetGamesByTeam(this.props.SelectedTeam);
        }

        this.setState(state);
    }

    public render() : React.ReactElement<{}> {
        return (
            <ListGroup>
                {this.state.games.map((item, i) => {   
                    return (
                        <ListGroupItem  key={i}>
                            <Grid>
                                <Row>
                                    <Col sm={10} md={2} lg={2}>
                                        <Button bsStyle="primary" block>{item.home}</Button>                                    
                                    </Col>
                                    <Col sm={10} md={2} lg={2}>
                                        <Button bsStyle="danger" block>{item.visitor}</Button>    
                                    </Col>
                                    <Col sm={10} md={2} lg={2}>
                                        <Button block><Glyphicon glyph="calendar"/><span className="dateLabel">{item.gameDate}</span></Button>
                                    </Col>
                                    <Col sm={10} md={2} lg={2}>
                                        <Button block><Glyphicon glyph="globe" /><span className="dateLabel">{item.location.fieldName}</span></Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </ListGroupItem>
                    )
                })}   
            </ListGroup>
        )
    }
}