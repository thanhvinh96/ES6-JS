var courseApi = 'http://localhost:3000/sanpham';

  function xoa(id){
    axios.delete(courseApi+"/"+id)
        .then(function (response) {
          // Handle successful response
          console.log('Delete', response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error('POST Error:', error);
        });

  }
  function hienthongtin(courses){
    var list = document.querySelector('#list');
    var html = courses.map(function(cource){
        return `
        <div class="sp"> 
        <p>${cource.name}</p>
        <p>${cource.chitietsp}</p>
        <p>${cource.danhmuc}</p>
        <p>${cource.soluong}</p>
        <p>${cource.ghichu}</p>
        <img height ="100" with="150" src="${cource.image}">
        <button onclick='xoa("${cource.id}")'>Xoa</button>
        <button onclick="chon(this,${cource.id})">edit</button>
        </div>
        `;
    });
    list.innerHTML = html.join('');
  }
  function hienthongtinHome(courses){
    var listsp = document.querySelector('#sanphamall');
    var html = courses.map(function(cource){
        return `
        <div class="sp">
          <img src="${cource.image}" alt="" width="280px" height="280px">
          <div class="dow">
            <p><b>${cource.name}</b></p>
            <span class="product-sale">
              <img src="./image/bang.png" alt="">
            <span>Giá cực sốc</span>
            </span>
            <p><b>${cource.giasp}</b></p>
            <input type="number" name="soluong" min="1" max="50">
            <p hidden>masp:${cource.id}</p>
            <button onclick="addcart(this)">Thêm Vào Giỏ Hàng</button>
            <div class="installment">
              Trả góp 0%
            </div>
          </div>
        </div>
        `
    });
    listsp.innerHTML = html.join('');
  }
  function hienthi(){
    axios.get(courseApi)
        .then(function (response) {
          // Handle successful response
          hienthongtin(response.data)
          // console.log('GET Response:', response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error('GET Error:', error);
        }); 

  }
  function hienthispHome(){
    axios.get(courseApi)
        .then(function (response) {
          // Handle successful response
          hienthongtinHome(response.data)
          // console.log('GET Response:', response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error('GET Error:', error);
        }); 

  }
  function hienthongtinspAdmin(courses){
    var listtbody = document.querySelector('#listspAdmin');
    var html = courses.map(function(cource,index){
        return `
        <tr>
            <td>${index+1}</td>
            <td>${cource.name}</td>
            <td><img height ="100" with="150" src="${cource.image}"></td>
            <td>${cource.giasp}</td>
            <td>${cource.danhmuc}</td>
            <td>${cource.chitietsp}</td>
            <td>${cource.soluong}</td>
            <td>${cource.ghichu}</td>
            <td><button onclick= "xoa('${cource.id}')">xóa</button></td>
        </tr>
        `
    });
    listtbody.innerHTML = html.join('');
  }
  function hienthispAdmin(){
    axios.get(courseApi)
        .then(function (response) {
          // Handle successful response
          hienthongtinspAdmin(response.data)
          // console.log('GET Response:', response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error('GET Error:', error);
        }); 

  }
function them(){
    const name = document.querySelector('input[name = "tensp"]').value;
    const giasp = document.querySelector('input[name = "giasp"] ').value;
    const chitietsp = document.querySelector('input[name = "chitietsp"]').value;
    const danhmuc = document.querySelector('input[name = "danhmuc"]').value;
    const soluong = document.querySelector('input[name = "soluong"]').value;
    const ghichu = document.querySelector('input[name = "ghichu"]').value;
    const hinh = document.querySelector("#img_preview").getAttribute("src");

    const sp = new sanpham();
    sp.setnamesp(name);
    sp.setgiasp(giasp);
    sp.setchitietsp(chitietsp);
    sp.sethinhsp(hinh);
    sp.setdanhmuc(danhmuc);
    sp.setsoluong(soluong);
    sp.setghichu(ghichu);
    
    axios.post(courseApi, { 
      // id: id,     
      name: name,
      giasp: giasp,
      chitietsp: chitietsp,
      image: hinh,
      soluong:soluong,
      danhmuc: danhmuc,
      ghichu: ghichu
    })
    .then(function (response) {
      // Handle successful response
      hienthongtin(response.data)
      // console.log('POST Response:', response.data);
    })
    .catch(function (error) {
      // Handle error
      console.error('POST Error:', error);
    });
  }