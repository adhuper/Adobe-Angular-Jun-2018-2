import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(p1:any, p2:any) : number
}

@Pipe({
	name : 'sort',
	pure : true
})
export class SortPipe implements PipeTransform{

	private getComparer(attr : string) : Comparer {
		return function(p1:any, p2:any) : number {
	        if (p1[attr] < p2[attr]) return -1;
	        if (p1[attr] > p2[attr]) return 1;
	        return 0;
	    }
	}
	private getDescending(comparer : Comparer) : Comparer{
		return function(p1:any, p2:any) : number {
	        return comparer(p1, p2) * -1;
	    }
	}
	transform(data : any[], attrName : string, desc : boolean = false) : any[] {
		console.log('sort transform triggered');
		if (!attrName || !data || !data.length) return data;
		let comparer = this.getComparer(attrName);
		if (desc)
			comparer = this.getDescending(comparer);
		return data.sort(comparer);
	}
}