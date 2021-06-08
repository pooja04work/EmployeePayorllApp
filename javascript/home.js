// UC4(day 47)
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>startDate</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img src="${empPayrollData._profilePic}" alt="" class="profile">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/images/delete.png" alt="delete">
                <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/images/edit.png" alt="edit">
            </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

// UC5(day 47)

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Moitry',
            _gender: 'Female',
            _department: [
                'Engineernig',
                'HR'
            ],
            _salary: '460000',
            _startDate: '2 dec 2019',
            _note: 'Hello Moitry',
            _id: new Date().getTime(),
            _profilePic: '../assets/images/Ellipse -4.png'
        },
        {
            _name: 'kanika',
            _gender: 'Female',
            _department: [
                'Engineernig'
            ],
            _salary: '550000',
            _startDate: '1 jan 2020',
            _note: 'Hello Kanika',
            _id: new Date().getTime() + 1,
            _profilePic: '../assets/images/Ellipse -7.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}