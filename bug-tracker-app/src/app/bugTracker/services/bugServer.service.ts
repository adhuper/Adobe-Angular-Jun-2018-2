import { Bug } from '../models/Bug';
import axios from 'axios';

export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	getAll() : Promise<Bug[]> {
		return axios
			.get(this.baseUrl)
			.then(response => response.data);
	}
	save(bugData : Bug) : Promise<Bug>{
		if (bugData.id === 0){
			return axios.post(this.baseUrl, bugData)
				.then(response => response.data);
		} else {
		return axios.put(`${this.baseUrl}/${bugData.id}`, bugData)
				.then(response => response.data);
		}
	}
	remove(bugData : Bug) : Promise<any>{
		return axios.delete(`${this.baseUrl}/${bugData.id}`)
				.then(response => response.data);
	}
}
