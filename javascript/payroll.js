// UC-10
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    // UC-8
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

// UC3(day 46)
const save = () => {
    console.log("try it");
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
        // console.log("hello");
        // console.log(employeePayrollData);

    } catch (e) {
        console.log(e);
        return;
    }
}
// UC4(day 46)
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    }
    else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () => {
    // console.log("createEmp");
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValuesById('#name');
        employeePayrollData.profilepic = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]');
        employeePayrollData.salary = getInputValuesById('#salary');
        employeePayrollData.note = getInputValuesById('#notes');
        let date = getInputValuesById('#day') + " " + getInputValuesById('#month') + " " + getInputValuesById('#year');
        console.log(date);
        employeePayrollData.startDate = Date.parse(date);
        console.log(employeePayrollData.startDate);
        alert(employeePayrollData.toString());

    } catch (e) {
        console.log(e);
        setTextValue('.text-error', e);

        throw e;
    }
    return employeePayrollData;

}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selItems.push(item.value);
    });
    return selItems;
}

const getInputValuesById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}