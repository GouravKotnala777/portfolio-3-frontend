
export type CommitSummary = {
  sha: string;
  message: string;
  date: string;
  url: string;
};

export type CommitDetails = {
  additions: number;
  deletions: number;
  total: number;
  files: {
    filename: string;
    additions: number;
    deletions: number;
  }[];
};
export type Contribution = {
  date: string;
  count: number;
  level: number;
};

export type MonthMap = Contribution[][];
export type GitHubYearTypes = "2031"|"2030"|"2029"|"2028"|"2027"|"2026"|"2025"|"2024"|"2023"|"2022"|"2021"|"2020"|"2019";
type ThemeTypes = "light"|"dark";
export type OneToNine = 1|2|3|4|5|6|7|8|9;
export interface MeteorMashAnimationTypes{
  numOfMeteors?:number;
  luminosity?:1|2|3|4|5|6|7;
  trailLength?:"xs"|"sm"|"md"|"lg"|"xl"|"xxl";
  trailLengthShrinkable?:"xs"|"sm"|"md"|"lg"|"xl"|"xxl";
  trailThickness?:OneToNine;
  trailColor?:{light:string; dark:string;};
  meteorCoreSize?:0.5|1|1.5|2|2.5|3|3.5|4|4.5|5;
  meteorCoreColor?:{light:string; dark:string;};
  collisionDebriSize?:0.5|1|1.5|2|2.5|3|3.5|4|4.5|5;
  collisionDebriColor?:{light:string; dark:string;};
};
export interface MeteorMashOptionTypes{
  numOfMeteors:number;
  luminosity:1|2|3|4|5|6|7;
  trailLength:"xs"|"sm"|"md"|"lg"|"xl"|"xxl";
  trailLengthShrinkable:"xs"|"sm"|"md"|"lg"|"xl"|"xxl";
  trailThickness:OneToNine;
  trailColor:string;
  meteorCoreColor:string;
  meteorCoreSize:0.5|1|1.5|2|2.5|3|3.5|4|4.5|5;
  collisionDebriColor:string;
  collisionDebriSize:0.5|1|1.5|2|2.5|3|3.5|4|4.5|5;
};
export interface MeteorMashPropInterface extends MeteorMashAnimationTypes{
    theme?:ThemeTypes;
    tailwindStyles?:string;
    animateUntill?:boolean;
};
type ThicknessPropTypes = 1|1.1|1.2|1.3|1.4|1.5|1.6|1.7|1.8|1.9|2|2.1|2.2|2.3|2.4|2.5|2.6|2.7|2.8|2.9|3|3.2|3.3|3.5|3.7|3.9|4|4.5|4.9|5|5.3|5.5|5.7;
export interface SlitherAnimationTypes{
  waveLength?:"xs"|"sm"|"md"|"lg"|"xl"|"xxl";
  amplitude?:OneToNine;
  smoothness?:OneToNine;
  waveThickness?:ThicknessPropTypes;
  blurEffect?:boolean;
  shrinkEffect?:boolean;
};
export interface ShatterImageAnimationTypes{
  pixelSize?:number;
  pixelGap?:number;
  mouseRadius?:OneToNine;
  friction?:OneToNine;
  ease?:OneToNine;
};
export interface ShatterImagePropTypes extends ShatterImageAnimationTypes {
  base64ImageURL:string;
  imageHeight?:number;
  imageWidth?:number;
  isAnimating?:boolean;
  tailwindStyles?:string;
};