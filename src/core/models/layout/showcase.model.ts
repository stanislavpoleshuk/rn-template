export interface ComponentShowcase {
    title: string;
    sections: Array<ComponentShowcaseSection>;
}

export interface ComponentShowcaseSection {
    title?: string;
    items: Array<ComponentShowcaseItem>;
}

export interface ComponentShowcaseItem {
    title?: string;
    props: any;
}

export interface ComponentShowcaseSetting {
    propertyName: string;
    value: any;
    description?: string;
}