import {ImageSourcePropType} from 'react-native';
import {BaseRequest, ISystemOptions} from '../../src/core/api/baseRequest';

export interface ImageSource {
  imageSource: ImageSourcePropType;
}

export class RemoteImage implements ImageSource {
  readonly source: string;


  protected get options(): ISystemOptions {
    return (
      BaseRequest.globalOptions || {
        getToken: (): string | null => null
      }
    );
  }

  constructor(source: string) {
    this.source = source.replace('http:', 'https:');
  }

  get imageSource(): ImageSourcePropType {
    const token = this.options.getToken();
    return {
      uri: this.source,
      headers: {
        Authorization: `Basic ${token}`,
      },
    };
  }
}
