import React from "react";

export interface DSPageProps {
    children: React.ReactNode;
    name: string;
    runTimes: Map<string, string>;
    commonApplications: string[];
}