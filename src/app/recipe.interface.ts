export interface IRecipe {
    id: string;
    title: string;
    img_url: string;
    duration_time: number;
    ingredients: string;
    preperation: string;
    isConfirmed: boolean;
    isArchived: boolean;
    selected: boolean;
}
