const getMonthString = (month: number): string => {
    switch (month) {
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        case 1:
        default:
            return 'January';
    }
};

export const formatDate = (dateVal: string|Date): string => {
    let d: Date = new Date();
    if (typeof dateVal === 'string') {
        d = new Date(dateVal.split(' ')[0]);
    } else {
        d = new Date(dateVal);
    }

    const month = getMonthString(d.getMonth() + 1);
    const day = d.getDate();
    const year = d.getFullYear();

    return `${month} ${day}, ${year}`;
};
