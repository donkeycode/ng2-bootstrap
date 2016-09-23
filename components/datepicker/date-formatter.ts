declare var moment:any;

export class DateFormatter {
  public format(date:Date, format:string):string {
    moment.locale('fr');
    return moment(date.getTime()).format(format);
  }
}
