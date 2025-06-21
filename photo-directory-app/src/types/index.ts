export interface Photo {
    id: number;
    title: string;
    description: string;
    imagePath: string; // Temporary file path for the photo image
}

export interface FilterOptions {
    category: string;
    dateRange: [Date, Date];
}