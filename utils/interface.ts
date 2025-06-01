import { ReactNode } from "react";




export interface SocialLinks {
    link: string,
    icon: ReactNode,
}



export interface CardProps {
    imageSrc: string;
    title: string;
    badgeText: string;
    participantCount: number;
    startTime: Date;
    endTime: Date;
    isLive: boolean
}