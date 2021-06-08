// UC4(day 47)
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>startDate</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
        <td>
            <img src="../assets/images/Ellipse -1.png" alt="" class="profile">
        </td>
        <td>Liza</td>
        <td>Female</td>
        <td>
            <div class="dept-label">Engineering</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>460000</td>
        <td>1 dec 2019</td>
        <td>
            <img id="1" onclick="remove(this)" src="../assets/images/delete.png" alt="delete">
            <img id="1" onclick="update(this)" src="../assets/images/edit.png" alt="edit">
        </td>
        </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
