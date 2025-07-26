export interface Trade {
    id: string;
    date: string;
    pair: string;
    direction: 'Buy' | 'Sell';
    risk: number;
    profit: number;
    result: 'Win' | 'Loss' | 'Breakeven' | 'Pending';
    strategy: string;
    notes?: string;
}

export interface AnalysisResult {
    recommendation: 'Take Trade' | 'Avoid Trade';
    confidence: number;
    riskReward: number;
    winProbability: number;
    expectedValue: number;
    details: {
        factor: string;
        score: number;
        weight: number;
    }[];
}