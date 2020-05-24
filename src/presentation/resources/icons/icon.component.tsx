import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';


export type IconProp = (style: ImageStyle) => React.ReactElement<ImageProps>;

export function renderIconElement (icon: IconProp, style: ImageStyle): React.ReactElement<ImageProps>  {
  const iconElement: React.ReactElement<ImageProps> = icon(style);
  return React.cloneElement(iconElement, {
    style: [style, iconElement.props.style],
  });
}

export interface IconSource {
  imageSource: ImageSourcePropType;
}

export class RemoteIcon implements IconSource {
  readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  get imageSource(): ImageSourcePropType {
    return { uri: this.source };
  }
}

export type AssetIconElement = React.ReactElement<ImageProps>;

export const AssetIcon = (source: IconSource, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
  return (
    <Image
      style={style}
      source={source.imageSource}
    />
  );
};
