

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
