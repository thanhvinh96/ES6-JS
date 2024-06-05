var courseApi = 'http://localhost:3000/user';

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

function themuser(){
    const username = document.querySelector('input[name = "username"]').value;
    const password = document.querySelector('input[name = "password"] ').value;
    const hovaten = document.querySelector('input[name = "hovaten"] ').value;
    const diachi = document.querySelector('input[name = "diachi"] ').value;
    const sdt = document.querySelector('input[name = "sdt"] ').value;
    const email = document.querySelector('input[name = "email"] ').value;
    
    const us = new users();
    us.setUsername(username);
    us.setPassword(password);
    us.sethovaten(hovaten);
    us.setdiachi(diachi);
    us.setsdt(sdt);
    us.setemail(email);
    us.setuser1(1);

    axios.post(courseApi, {    
        username: username,
        password: password,
        hovaten : hovaten ,
        diachi : diachi,
        sdt: sdt,
        email: email,
        user1: 1
    });
}
function hienthongtinuser(courses){
  var listuser = document.querySelector('#listuser');
  var html = courses.map(function(cource,index){
      return `
      <tr>
          <td>${index+1}</td>
          <td>${cource.username}</td>
          <td>${cource.sdt}</td>
          <td>${cource.email}</td>
          <td>${cource.hovaten}</td>
          <td>${cource.diachi}</td>
      </tr>
      `
  });
  listuser.innerHTML = html.join('');
}
function hienthiuser(){
  axios.get(courseApi)
      .then(function (response) {
        // Handle successful response
        hienthongtinuser(response.data)
        // console.log('GET Response:', response.data);
      })
      .catch(function (error) {
        // Handle error
        console.error('GET Error:', error);
      }); 

}
async function kiemtra(){
  const db = new database();
  const users = await db.doc(courseApi);
  const username = document.querySelector('input[name = "username"]').value;
  const password = document.querySelector('input[name = "password"]').value;
  kq = 0;
  po = -1;
  for(let i = 0; i<users.length;i++){
    if(users[i]['username'] == username && users[i]['password'] == password){
      console.log(users);
      kq=1;
      po=users[i]['user1'];
    }
  }
  if (kq==1 && po == 0) {
    window.location = "../admin/admin.html";
  }
  if(kq==1 && po==1){
    window.location = "../Home/index.html";
  }
  if(kq == 0 && po == -1){
    alert("Tài khoản hoặc mật không chính xác");
  }
}