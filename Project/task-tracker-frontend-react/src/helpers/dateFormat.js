
export const dateFormat = (input) => {
    let result = "";
    let date = new Date(input);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    result += day.toString().length <= 1 ? `0${day}/` : `${day}/`;
    result += month.toString().length <= 1 ? `0${month}/` : `${month}/`;
    result += year;
    return result;
}