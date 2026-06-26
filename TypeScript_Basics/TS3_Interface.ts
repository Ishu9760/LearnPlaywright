interface testCases {
    readonly id: number;
    name: string;
    status: string;
    duration: number;

}

let test1: testCases = {
    id: 1,
    name: "Test Case 1",
    status: "Passed",
    duration: 5
};

console.log(`id: ${test1.id}, name: ${test1.name}, status: ${test1.status}, duration: ${test1.duration} seconds`);

