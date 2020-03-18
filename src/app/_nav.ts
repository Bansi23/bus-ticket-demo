interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [

  {
    name: 'Bus Ticket',
    url: '/bus-ticket',
    icon: 'fa fa-bus',
  },

  // {
  //   name: 'Red-bus',
  //   url: '/select-bus',
  //   icon: 'fa fa-bus',
  //   children: [
  //     {
  //       name: 'Bus Ticket',
  //       url: '/select-bus/bus-ticket',
  //       icon: 'fa fa-ticket'
  //     }
  //   ]
  // },
];
