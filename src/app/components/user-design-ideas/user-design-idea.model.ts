export interface IUserDesignIdea {
    userNumber: number;
    userName: string;
    submittedDate: Date;
    feedbackId: number;
    feedbackTitle: string; 
    feedbackBody: string;
    feedbackVotes: number;
    userComments: IUserComments[];
}

export interface IUserComments {
    userName: string;
    userComment: string;
}