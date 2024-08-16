import { ClosedBookIcon, OpenBookIcon, SlackIcon } from "../../assets";
import { ContactSelectOptions, ContactpagCardType } from "../types";

export const cards: ContactpagCardType[] = [
    {
        title: 'Brinte docs',
        subTitle: 'See Brinte docs',
        icon: OpenBookIcon,
        target: '/'
    },
    {
        title: 'Brinte Community',
        subTitle: 'Join Slack community',
        icon: SlackIcon,
        target: '/'
    },
    {
        title: 'Brinte support',
        subTitle: 'Go to help center',
        icon: ClosedBookIcon,
        target: '/'
    }
]



export const contactSelectOptions: ContactSelectOptions[] = [
    { value: 'search engine', label: 'Search engine' },
    { value: 'recommendation', label: 'Recommended by friend or colleague' },
    { value: 'social media', label: 'Social media' },
    { value: 'blog or publication', label: 'Blog or publication' },
    { value: 'others', label: 'Others' },
  ];
