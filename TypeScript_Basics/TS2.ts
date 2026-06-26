let responseCode: number[] = [200, 404, 500];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
}

console.log("Failed response codes: " + getFailedCodes(responseCode));