import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'object',
	pure: false
})
export class ObjectPipe implements PipeTransform {

	transform(data:any,type:string): any {
		let newData = type=="values" ? Object.values(data) : type=="keys" ? Object.keys(data) : data;
		return newData;
	}

}
