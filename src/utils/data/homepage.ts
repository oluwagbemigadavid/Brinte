import { ClosedBookIcon, OpenBookIcon, SlackIcon } from "../../assets";
import { ContactSelectOptions, HomepagCardType } from "../types";

export const cards: HomepagCardType[] = [
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
    { value: 'aws', label: 'AWS' },
    { value: 'azure', label: 'Azure' },
    { value: 'google_cloud', label: 'Google Cloud' },
    { value: 'render', label: 'Render' },
    { value: 'vercel', label: 'Vercel' },
    { value: 'others', label: 'Others' },
  ];
