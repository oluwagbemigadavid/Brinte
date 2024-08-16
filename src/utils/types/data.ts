export interface MenuLinkType {
    name: string;
    target: string;
    icon?: any;
}

export interface RouteConfigType {
    path: string;
    component: React.ComponentType;
    title?: string;
}

export interface ContactpagCardType {
    title: string;
    icon: any;
    subTitle: string;
    target: string;
}

export interface FooterLinkType {
    header: string;
    links: MenuLinkType[];
}

export interface ContactSelectOptions {
    label: string;
    value: string
}
export interface ContactFormDataType {
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    url: string;
    provider: string;
    message: string;
  }
  export interface ContactFromErrorsType {
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    url: string;
    provider: string;
    message: string;
  }
  