import { ReactNode } from "react";

export interface BasicCardProps {
  label: string;
  icon: ReactNode;
}

export interface ButtonProps {
  loading?: boolean;
  label: string;
  labelColor: string;
  onPress?: () => void;
  bg: string;
  disabled?: boolean;
}

export interface UsecaseProps {
  label: string;
  icon: ReactNode;
  description: string;
  bgColor: string;
  textColor: string;
  animeDirection: string;
}

export interface HeroTextProps {
  title: string;
  subtitle: string;
}
export interface QuestionProps {
  question: string;
  answer: string;
}
