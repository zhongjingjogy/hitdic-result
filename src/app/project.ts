export class Project {
    Taskid: string;
    Title: string;
    Note: string;
    Status: string;
    Method: string;
    Corennumber: number;
    Createdtime: string;
    Username: string;
    Computingnode: string;
    Result: Result;
}

export class Result {
    Method: string;
    Src: string;
    Couples: Couple[];
    Logfile: string;
    Number: number;
    Unknwons: Unknown;
    Cost: number;
    Elapsed: number;
}

export class Couple {
    Couplename: string;
    Temperature: number;
    Time: number;
    Initpos: number;
}

export class Unknown {
    Key: string;
    Value: string;
}