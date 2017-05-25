
import { ScheduleStore } from './ScheduleStore';

export interface ScheduleAction {
    TYPE: string;
    PAYLOAD: any;
}


export class ScheduleDispatcher {

    public constructor(){

    }

    private DispatchQueue : ScheduleAction [];

    public Subscribe(action: ScheduleAction) : void {
        this.DispatchQueue.push(action);
    }

    public Dispatch() {}

}