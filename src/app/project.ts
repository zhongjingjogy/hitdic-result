export class Project {
    taskid: string;
    title: string;
    note: string;
    status: string;
    method: string;
    corennumber: number;
    createdtime: string;
    username: string;
    computingnode: string;
    result: Result;
}

export class Result {
    method: string;
    src: string;
    couples: Couple[];
    logfile: string;
    number: number;
    unknowns: Unknown[];
    cost: number;
    elapsed: number;
}

export class Couple {
    couplename: string;
    temperature: number;
    time: number;
    initpos: number;
}

export class Unknown {
    key: string;
    value: string;
}