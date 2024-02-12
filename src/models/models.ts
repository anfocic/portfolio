export interface FormModel {
    name: string;
    email: string;
    message: string;
}
export interface AlertModel {
    show: boolean;
    text: string;
    type: string;
}

export interface CurrentStage {
    currentStage: number;
}