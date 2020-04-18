import {ImageStyle, ImageURISource, StyleProp} from 'react-native';
import {AssetIconElement} from '../icons/icon.component';
import {MaloimushimIcon, MatereamIcon, MnogodetSemiaIcon, PensionerIcon, VeteranIcon} from '../icons';

export class ImageResources {
  static readonly logo: ImageURISource = require('./source/logo.png');
  static readonly splash: ImageURISource = require('./source/splash.png');
  static readonly noImage: ImageURISource = require('./source/no_image.png');
  static readonly userDefAvatar: ImageURISource = require('./source/userDefAvatar.png');
  static readonly categoryBg: ImageURISource = require('./source/category_bg.png');
  static readonly file: ImageURISource = require('./source/file.png');
}

export class CategoryDefault {

  private static readonly veteran: ImageURISource = require('./source/veteran.png');
  private static readonly pensioner: ImageURISource = require('./source/pensioner.png');
  private static readonly mnogodetSemia: ImageURISource = require('./source/mnogodet_semia.png');
  private static readonly mateream: ImageURISource = require('./source/mateream.png');
  private static readonly maloimushim: ImageURISource = require('./source/maloimushim.png');

  static getById(id: number): ImageURISource | undefined {
    switch (id) {
      case 1:
        return CategoryDefault.veteran;
      case 2:
        return CategoryDefault.pensioner;
      case 3:
        return CategoryDefault.mnogodetSemia;
      case 4:
        return CategoryDefault.mateream;
      case 5:
        return CategoryDefault.maloimushim;
    }
    return undefined;
  }
}

export class RequestImageDefault {
  private static readonly cleaning: ImageURISource = require('./source/request/cleaning.png');
  private static readonly clinic: ImageURISource = require('./source/request/clinic.png');
  private static readonly cooking: ImageURISource = require('./source/request/cooking.png');
  private static readonly grocery_store: ImageURISource = require('./source/request/grocery_store.png');
  private static readonly out_trash: ImageURISource = require('./source/request/out_trash.png');
  private static readonly pharmacy: ImageURISource = require('./source/request/pharmacy.png');
  private static readonly replace_bulb: ImageURISource = require('./source/request/replace_bulb.png');
  private static readonly tune_tv: ImageURISource = require('./source/request/tune_tv.png');
  private static readonly washing: ImageURISource = require('./source/request/washing.png');

  static getByCategoryName(categoryName?: string): ImageURISource | undefined {
    categoryName = categoryName ? categoryName.toUpperCase() : '';
    switch (categoryName) {
      case 'Помочь с уборкой'.toUpperCase():
        return RequestImageDefault.cleaning;
      case  'Отвезти в поликлинику'.toUpperCase():
        return RequestImageDefault.clinic;
      case  'Помочь с приготовлением еды'.toUpperCase():
        return RequestImageDefault.cooking;
      case  'Сходить в магазин за продуктами'.toUpperCase():
        return RequestImageDefault.grocery_store;
      case  'Вынести мусор'.toUpperCase():
        return RequestImageDefault.out_trash;
      case  'Сходить в аптеку'.toUpperCase():
        return RequestImageDefault.pharmacy;
      case  'Заменить лампочку'.toUpperCase():
        return RequestImageDefault.replace_bulb;
      case  'Настроить телевизор'.toUpperCase():
        return RequestImageDefault.tune_tv;
      case  'Помочь со стиркой'.toUpperCase():
        return RequestImageDefault.washing;

      default:
        return undefined;
    }
  }
}
