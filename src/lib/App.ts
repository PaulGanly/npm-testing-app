import * as _ from 'lodash';

class App {
  public isBlankStringRegex(str: string): boolean {
    return !str || /^\s*$/.test(str);
  }

  public isBlankStringNative(str: string): boolean {
    return !str || str.length === 0;
  }

  public isBlankStringLib(str: string): boolean {
    return _.isBlank(str);
  }
}
