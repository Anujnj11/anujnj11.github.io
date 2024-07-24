export const calculateInYears = (startDate: number) => { // birthday is a date
    var ageDifMs = Date.now() - startDate;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
