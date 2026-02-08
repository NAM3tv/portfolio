export interface ProjectCardProps {
    id: string;
    name: string;
    type: string;
    coverImg: string;
    tech: string[];
}

export interface SkillProps {
  name: string;
  onClick: () => void;
  type:string;
  isActive:boolean;
}

export interface CareerPathProps {
    companyName: string;
    companyLogo: string;
    role: string;
    startDate: string;
    finishDate: string | boolean;
    location: string;
    tasks: string[];
    webLink?: string;
    isFirst?: boolean;
    className?: string;
}
