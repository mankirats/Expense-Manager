const extractExpenseYear = (expenseDate) => {
    let expenseYear = new Date(expenseDate);
    return expenseYear.getFullYear();
};

const formatDate = (inputDate) => {
    let options = {
        // weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    let dateToFormat = new Date(inputDate);

    return dateToFormat.toLocaleDateString("en-US", options);
};

export { extractExpenseYear, formatDate };
