var svService = new SinhViecService();

var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();

  promise
    .then(function (res) {
      console.log("Success! ", res.data);
      renderEmployees(res.data);
    })
    .catch(function (err) {
      console.log("Fail ", err.message);
    });
};
renderSinhVien();

const renderEmployees = function (arr) {
  var htmlContent = "";
  for (var i = 0; i < arr.length; i++) {
    var currentEmp = arr[i];
    htmlContent += `
      <tr>
        <td>${currentEmp.MaSV}</td>
        <td>${currentEmp.HoTen}</td>
        <td>${currentEmp.Email}</td>
        <td>${currentEmp.SoDT}</td>
        <td>${currentEmp.CMND}</td>
        <td>${currentEmp.DiemToan}</td>
        <td>${currentEmp.DiemLy}</td>
        <td>${currentEmp.DiemHoa}</td>
        <td>
        <button class="btn btn-danger" onclick="deleteEmpl('${currentEmp.id}')">Xóa</button>
        </td>
        <td>
         
          <button class="btn btn-info" onclick="getUpdateEmpl('${currentEmp.id}')">Cập nhật</button>
        </td>
      </tr>`;
  }
  console.log(htmlContent);
  document.getElementById("tblSinhVien").innerHTML = htmlContent;
};
