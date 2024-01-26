export function formatDate(params) {
    var dateObject = new Date(params);
    // Lấy ngày, tháng và năm từ đối tượng Date
    var year = dateObject.getFullYear();
    var month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    var day = String(dateObject.getDate()).padStart(2, '0');

    // Tạo chuỗi ngày mới trong định dạng "YYYY-MM-DD"
    return `${year}-${month}-${day}`;
}

export default formatDate