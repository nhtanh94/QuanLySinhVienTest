var SinhViecService = function () {
  this.themMoi = function (sinhVien) {};
  this.xoa = function (sinhVien) {};
  this.capNhat = function (sinhVien) {};
  this.layDanhSachSinhVien = function () {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
      method: "GET",
    });
  };
  this.layThongTinSinhVien = function (maSV) {};
};
