export interface Robot  {
    name: string;
    id: number;
    email: string
}

export interface RobotsState {
    search: string;
    robots: Robot[];
    filteredRobots: Robot[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null; // Allow `string` or `null`
}