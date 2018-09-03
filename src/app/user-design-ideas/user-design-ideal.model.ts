export class UserDesignIdea {
    constructor(
        public userNumber: number,
        public userName: string,
        public submittedDate: Date,
        public userFeedback: string,
        public userComments: string[]
    ) {

    }
}