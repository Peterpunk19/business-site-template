import "server-only";

import { BetaAnalyticsDataClient } from "@google-analytics/data";

import { businessConfig } from "@/config/business";

import type { AnalyticsResult, AnalyticsSummary } from "./analytics.types";

function getAnalyticsClient() {
  const clientEmail = process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL;

  const privateKey = process.env.GOOGLE_ANALYTICS_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google Analytics credentials are not configured.");
  }

  return new BetaAnalyticsDataClient({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
  });
}

async function fetchAnalyticsSummary(): Promise<AnalyticsSummary> {
  const propertyId = process.env.GA_PROPERTY_ID;

  if (!propertyId) {
    throw new Error("GA_PROPERTY_ID is not configured.");
  }

  const client = getAnalyticsClient();

  const [response] = await client.runReport({
    property: `properties/${propertyId}`,

    dateRanges: [
      {
        startDate: "30daysAgo",
        endDate: "today",
      },
    ],

    metrics: [
      {
        name: "activeUsers",
      },
      {
        name: "sessions",
      },
      {
        name: "screenPageViews",
      },
    ],
  });

  const metricValues = response.rows?.[0]?.metricValues ?? [];

  return {
    users: Number(metricValues[0]?.value ?? 0),
    sessions: Number(metricValues[1]?.value ?? 0),
    pageViews: Number(metricValues[2]?.value ?? 0),
  };
}

export async function getAnalyticsSummary(): Promise<AnalyticsResult> {
  if (!businessConfig.analytics.enabled) {
    return {
      enabled: false,
      available: false,
      data: null,
    };
  }

  try {
    const data = await fetchAnalyticsSummary();

    return {
      enabled: true,
      available: true,
      data,
    };
  } catch (error) {
    console.error("Could not load Google Analytics:", error);

    return {
      enabled: true,
      available: false,
      data: null,
    };
  }
}
