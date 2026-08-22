export type AnalyticsSummary = {
  users: number;
  sessions: number;
  pageViews: number;
};

export type AnalyticsResult =
  | {
      enabled: true;
      available: true;
      data: AnalyticsSummary;
    }
  | {
      enabled: true;
      available: false;
      data: null;
    }
  | {
      enabled: false;
      available: false;
      data: null;
    };
