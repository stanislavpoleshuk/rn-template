import React from 'react';
import {
  ImageProps,
  ImageStyle, ImageURISource,
  StyleProp,
} from 'react-native';
import {
  AssetIcon,
  AssetIconElement,
  IconSource,
  RemoteIcon,
} from './icon.component';
import {Icon, IconElement} from "@ui-kitten/components";


export const AllRequestsIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/allRequests.png'),
  };

  return AssetIcon(source, style);
};


export const MyRequestsIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/myRequests.png'),
  };

  return AssetIcon(source, style);
};


export const VolunteerIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/volunteer.png'),
  };
  return AssetIcon(source, style);
};


export const RatingsIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/ratings.png'),
  };
  return AssetIcon(source, style);
};

export const MyProfileIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/myProfile.png'),
  };

  return AssetIcon(source, style);
};


export const RegionIconSocial = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/icon-region.png'),
  };

  return AssetIcon(source, style);
};


export const CategoryIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/category.png'),
  };

  return AssetIcon(source, style);
};


export const RegionIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/region.png'),
  };

  return AssetIcon(source, style);
};


export const HelpHouseIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/helpHouse.png'),
  };

  return AssetIcon(source, style);
};

export const FilterIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/filter.png'),
  };

  return AssetIcon(source, style);
};

export const ProjectsIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/projects.png'),
  };

  return AssetIcon(source, style);
};

export const UserSettingsIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/user_settings.png'),
  };

  return AssetIcon(source, style);
};


export const EBookIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/eBook.png'),
  };

  return AssetIcon(source, style);
};

export const PersonalInfoIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/personalInfo.png'),
  };

  return AssetIcon(source, style);
};

export const EducationIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/education.png'),
  };

  return AssetIcon(source, style);
};

export const WorkIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/work.png'),
  };

  return AssetIcon(source, style);
};

export const LanguagesIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/language.png'),
  };

  return AssetIcon(source, style);
};

export const AllRequestIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/allRequests.png'),
  };

  return AssetIcon(source, style);
};

export const MyRequestIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/myRequests.png'),
  };

  return AssetIcon(source, style);
};

export const ArrowHeadDownIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrowhead-down'/>
  );
};

export const ArrowHeadUpIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrowhead-up'/>
  );
};

export const AttachIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='attach-2-outline'/>
  );
};

export const AttachIconOutline= (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='attach-outline'/>
  );
};

export const LogOutIconOutline= (style: ImageStyle): IconElement<ImageProps> => {
  return (
      <Icon {...style} name='log-out-outline'/>
  );
};


export const AlertCircleIconOutline= (style: ImageStyle): IconElement<ImageProps> => {
  return (
      <Icon {...style} name='alert-circle-outline'/>
  );
};





export const ArrowIosBackFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrow-ios-back'/>
  );
};

export const ArrowIosDownwardOutlet = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrow-ios-downward-outline'/>
  );
};

export const ArrowDownFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrow-down'/>
  );
};


export const ArrowIosUpOutlet = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='chevron-up-outline'/>
  );
};


export const AwardFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='award'/>
  );
};

export const ArchiveOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='archive-outline'/>
  );
};

export const BulbIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='bulb'/>
  );
};

export const CameraIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='camera'/>
  );
};

export const CameraIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='camera-outline'/>
  );
};


export const CartIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='shopping-cart-outline'/>
  );
};

export const CartIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='shopping-cart'/>
  );
};

export const ClockIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='clock-outline'/>
  );
};

export const CalendarIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='calendar-outline'/>
  );
};

export const ClipboardIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='clipboard-outline'/>
  );
};

export const CheckMarkIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='checkmark-outline'/>
  );
};

export const MenuIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
      <Icon {...style} name='menu-outline'/>
  );
};




export const BellIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='bell-outline'/>
  );
};

export const EmailIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='email'/>
  );
};

export const EyeOffIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='eye-off'/>
  );
};

export const EyeIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='eye'/>
  );
};


export const EyeOffIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='eye-off-outline'/>
  );
};

export const EyeIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='eye-outline'/>
  );
};

export const ColorPaletteIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='color-palette-outline'/>
  );
};

export const ArrowForwardIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrow-forward-outline'/>
  );
};

export const ArrowIosForwardIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='arrow-ios-forward-outline'/>
  );
};

export const LinkedinIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='linkedin-outline'/>
  );
};

export const GridIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='grid-outline'/>
  );
};

export const InfoIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='info'/>
  );
};

export const HeartIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='heart'/>
  );
};

export const LayoutIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='layout-outline'/>
  );
};

export const LockIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='lock'/>
  );
};

export const MessageCircleIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='message-circle'/>
  );
};

export const MessageCircleIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='message-circle-outline'/>
  );
};

export const MoreHorizontalIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='more-horizontal'/>
  );
};

export const PersonIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='person'/>
  );
};

export const PersonIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='person-outline'/>
  );
};

export const PhoneIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='phone'/>
  );
};

export const PhoneIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='phone-outline'/>
  );
};


export const PersonAddIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='person-add'/>
  );
};

export const PinIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='pin'/>
  );
};

export const PinIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='pin-outline'/>
  );
};

export const PlusIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='plus'/>
  );
};

export const MinusIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='minus'/>
  );
};

export const SearchIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='search-outline'/>
  );
};

export const ImageIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
      <Icon {...style} name='image-outline'/>
  );
};


export const StarIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='star'/>
  );
};

export const StarIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='star-outline'/>
  );
};

export const FlashIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='flash-outline'/>
  );
};

export const DoneAllIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='done-all-outline'/>
  );
};

export const MoreVerticalIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='more-vertical'/>
  );
};

export const CreditCardIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='credit-card'/>
  );
};

export const CloseIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='close-outline'/>
  );
};

export const CloseCircleIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='close-circle-outline'/>
  );
};

export const MicIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='mic'/>
  );
};

export const MinusIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='minus-outline'/>
  );
};

export const PlusIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='plus-outline'/>
  );
};


export const PaperPlaneIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='paper-plane'/>
  );
};

export const ImageIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='image'/>
  );
};

export const FileTextIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='file-text'/>
  );
};

export const FileTextIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='file-text-outline'/>
  );
};

export const MapIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='map'/>
  );
};

export const PeopleIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='people'/>
  );
};

export const PlayCircleIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='play-circle'/>
  );
};

export const ShareIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='share-outline'/>
  );
};

export const ListIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='list'/>
  );
};

export const GoogleIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='google'/>
  );
};

export const GlobeIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='globe'/>
  );
};

export const FacebookIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='facebook'/>
  );
};

export const TwitterIconFill = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='twitter'/>
  );
};

export const SettingsIconOutline = (style: ImageStyle): IconElement<ImageProps> => {
  return (
    <Icon {...style} name='settings-outline'/>
  );
};


export const CleaningIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/cleaning.png'),
  };
  return AssetIcon(source, style);
};


export const ClinicIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/clinic.png'),
  };
  return AssetIcon(source, style);
};

export const CookingIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/cooking.png'),
  };
  return AssetIcon(source, style);
};

export const GroceryStoreIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/grocery_store.png'),
  };
  return AssetIcon(source, style);
};

export const OutTrashIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/out_trash.png'),
  };
  return AssetIcon(source, style);
};

export const PharmacyIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/pharmacy.png'),
  };
  return AssetIcon(source, style);
};


export const ReplaceBulbIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/replace_bulb.png'),
  };
  return AssetIcon(source, style);
};

export const TuneTvIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/tune_tv.png'),
  };
  return AssetIcon(source, style);
};

export const WashingIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/washing.png'),
  };
  return AssetIcon(source, style);
};


export const AttachIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/attachIcon.png'),
  };

  return AssetIcon(source, style);
};


export const VeteranIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/veteran.png'),
  };

  return AssetIcon(source, style);
};

export const MatereamIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/mateream.png'),
  };

  return AssetIcon(source, style);
};


export const MaloimushimIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/maloimushim.png'),
  };

  return AssetIcon(source, style);
};

export const MnogodetSemiaIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/mnogodet_semia.png'),
  };

  return AssetIcon(source, style);
};

export const PensionerIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/pensioner.png'),
  };

  return AssetIcon(source, style);
};


export const SwitchStatusIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/switchStatus.png'),
  };

  return AssetIcon(source, style);
};


export const PremiumVolunteerIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/common/premium_volunteer.png'),
  };

  return AssetIcon(source, style);
};

export const PriorityRequestIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/mark/priority.png'),
  };
  return AssetIcon(source, style);
};

export const UrgentlyRequestIcon = (style: StyleProp<ImageStyle>): AssetIconElement => {
  const source: IconSource = {
    imageSource: require('./source/mark/urgently.png'),
  };
  return AssetIcon(source, style);
};



export class RequestImageIconDefault {
  private static readonly cleaning: ImageURISource = require('./source/request/cleaning.png');
  private static readonly clinic: ImageURISource = require('./source/request/clinic.png');
  private static readonly cooking: ImageURISource = require('./source/request/cooking.png');
  private static readonly grocery_store: ImageURISource = require('./source/request/grocery_store.png');
  private static readonly out_trash: ImageURISource = require('./source/request/out_trash.png');
  private static readonly pharmacy: ImageURISource = require('./source/request/pharmacy.png');
  private static readonly replace_bulb: ImageURISource = require('./source/request/replace_bulb.png');
  private static readonly tune_tv: ImageURISource = require('./source/request/tune_tv.png');
  private static readonly washing: ImageURISource = require('./source/request/washing.png');
  public static readonly cardView: ImageURISource = require('./source/common/cardView.png');
  public static readonly listView: ImageURISource = require('./source/common/listView.png');


  static getByCategoryName(categoryName?: string): ImageURISource {
    categoryName = categoryName ? categoryName.toUpperCase() : '';
    switch (categoryName) {
      case 'Помочь с уборкой'.toUpperCase():
        return RequestImageIconDefault.cleaning;
      case  'Отвезти в поликлинику'.toUpperCase():
        return RequestImageIconDefault.clinic;
      case  'Помочь с приготовлением еды'.toUpperCase():
        return RequestImageIconDefault.cooking;
      case  'Сходить в магазин за продуктами'.toUpperCase():
        return RequestImageIconDefault.grocery_store;
      case  'Вынести мусор'.toUpperCase():
        return RequestImageIconDefault.out_trash;
      case  'Сходить в аптеку'.toUpperCase():
        return RequestImageIconDefault.pharmacy;
      case  'Заменить лампочку'.toUpperCase():
        return RequestImageIconDefault.replace_bulb;
      case  'Настроить телевизор'.toUpperCase():
        return RequestImageIconDefault.tune_tv;
      case  'Помочь со стиркой'.toUpperCase():
        return RequestImageIconDefault.washing;
      default:
        return RequestImageIconDefault.cleaning;
    }
  }
}


export class RequestIconDefault {
  static getByCategoryName(style: StyleProp<ImageStyle>, categoryName?: string): AssetIconElement {
    let iconSource;
    categoryName = categoryName ? categoryName.toUpperCase() : '';
    switch (categoryName) {
      case 'Помочь с уборкой'.toUpperCase():
        return CleaningIcon(style);
      case  'Отвезти в поликлинику'.toUpperCase():
        return ClinicIcon(style);
      case  'Помочь с приготовлением еды'.toUpperCase():
        return CookingIcon(style);
      case  'Сходить в магазин за продуктами'.toUpperCase():
        return GroceryStoreIcon(style);
      case  'Вынести мусор'.toUpperCase():
        return OutTrashIcon(style);
      case  'Сходить в аптеку'.toUpperCase():
        return PharmacyIcon(style);
      case  'Заменить лампочку'.toUpperCase():
        return ReplaceBulbIcon(style);
      case  'Настроить телевизор'.toUpperCase():
        return TuneTvIcon(style);
      case  'Помочь со стиркой'.toUpperCase():
        return WashingIcon(style);
      default:
        return CleaningIcon(style);
    }
    return CleaningIcon(style);
  }
}

export class CategoryHelpIcon {
  static getById(style: StyleProp<ImageStyle>, id: number): AssetIconElement | null {
    switch (id) {
      case 1:
        return VeteranIcon(style);
      case 2:
        return PensionerIcon(style);
      case 3:
        return MnogodetSemiaIcon(style);
      case 4:
        return MatereamIcon(style);
      case 5:
        return MaloimushimIcon(style);
    }
    return null;
  }
}


export class MarkIcon {
  static getById(style: StyleProp<ImageStyle>, id: number): AssetIconElement | null {
    switch (id) {
      case 0:
        return PriorityRequestIcon(style);
      case 1:
        return UrgentlyRequestIcon(style);
      default:
        return null;
    }
  }
}

export {
  AssetIcon,
  RemoteIcon,
} from './icon.component';
