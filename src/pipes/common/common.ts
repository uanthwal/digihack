import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CommonPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({name: 'limitTo'})
export class LimitPipe implements PipeTransform {
  /**
   * Takes an array and limit it to parameter passed.
   */
  transform(array: Array<any>, limit: number) {
    return limit ? array.slice(0, limit) : array;
  }
}
