export interface Employee {
    id: number;
    name: string;
    job: string;
    salary: number;
    department: Department;
}

export interface Department {
    id: number;
    name: string;
    location: string;
}
