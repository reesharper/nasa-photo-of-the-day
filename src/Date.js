

const getFormattedDate = () => {
    const cDate = new Date()
    const day = cDate.getDate();
    const formatDay = String(day).padStart(2, "0");
    const month = cDate.getMonth() + 1;
    const formatMonth = String(month).padStart(2, "0");
    const formatYear = String(cDate.getFullYear());
    return `${formatYear}-${formatMonth}-${formatDay}`;
}

export default getFormattedDate;