import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from './bugServer.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugServer : BugServerService){

	}
	getAll() : Promise<Bug[]>{
		return this.bugServer.getAll();
	}
	createNew(bugName : string) : Promise<Bug> {
		let newBug : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugServer.save(newBug);
	}

	toggle(bugToToggle : Bug) : Promise<Bug> {
		//bugToToggle.isClosed = !bugToToggle.isClosed;
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugServer.save(toggledBug);
	}
	remove(bug : Bug){
		this.bugServer.remove(bug);
	}
}