import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


    transform(BlogsArray: any[], selectedTag: string): any[] {
      console.log(BlogsArray)
      if (!BlogsArray || BlogsArray.length === 0) {
        return [];
      }
  
      if (!selectedTag || selectedTag === 'All') {
        return BlogsArray;
      }
  
      return BlogsArray.filter((item: any) => item.Category === selectedTag);
       
    }
    
}

