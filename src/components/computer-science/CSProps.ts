import React from "react";

export interface DSPageProps {
    children?: React.ReactNode;
    name: string;
    implementation: React.ReactNode;
    runTimes: Map<string, React.ReactNode>;
    commonApplications: string[];
}