/**
 * 
 * @param {*} completed : completed task
 * @param {*} sum : sum of task
 * @returns 
 */
const task_kpi = (completed, sum) => {
    return Number.parseFloat(completed / sum);
}

/**
 * 
 * @param {*} operated_time 
 * @param {*} regulated_time 
 * @returns 
 */
const time_kpi = (operated_time, regulated_time) => {
    if (operated_time >= 4 * regulated_time / 5) {
        return Number.parseFloat(regulated_time / operated_time);
    } else {
        return 0;
    }
}

/**
 * 
 * @param {*} task_kpi_array 
 * @param {*} time_kpi_array 
 * @returns 
 */
const quality_kpi = (task_kpi_array, time_kpi_array) => {
    let number_of_task = task_kpi_array.length;

    let task_kpi_average = task_kpi_array.reduce(
        (prev, cur) => prev + cur,
        0
    );

    let time_kpi_average = time_kpi_array.reduce(
        (prev, cur) => prev + cur,
        0
    );

    return Number.parseFloat((task_kpi_average + time_kpi_average) / (2 * number_of_task));
}