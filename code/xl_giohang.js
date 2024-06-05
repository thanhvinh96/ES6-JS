document.getElementById('showspgiohang').style.display='none';
function showgiohang(){
  var x = document.getElementById('showspgiohang');
  if(x.style.display == 'none'){
    x.style.display = 'block';
  }else{
    x.style.display = 'none';
  }
}
function kiemtragh(masp){
  for (let i=0;i<giohangs.length;i++){
      if(giohangs[i].masp == masp){
          return i;
      }
  }
  return -1;
}
function addcart(x){
    var the = x.parentElement.parentElement;
    let hinhsp = the.children[0].src;
    let tensp = the.children[1].children[0].innerHTML;
    let giasp = the.children[1].children[2].innerText;
    let soluong = the.children[1].children[3].value;
    let masp = the.children[1].children[4].innerText;

    const gh = new giohang();
    gh.sethinhsp(hinhsp);
    gh.settensp(tensp);
    gh.setgiasp(giasp);
    gh.setsoluong(soluong);
    gh.setmasp(masp);

    let kt = kiemtragh(gh.getmasp());
    if (kt == -1) {
        giohangs.push(gh);
    }else{
        let sl = Number(giohangs[kt].soluong)+Number(soluong);
        giohangs[kt].soluong = sl;
    }
    showsanpham();
}
function xuatgiohang(giohangs){
  let txt = "";
  for(let i =0 ; i<giohangs.length; i++){
    txt += '<tr>';
    txt += this.motsp_giohang(giohangs[i]);
    txt += '</tr>';
  }
  if(giohangs.length >0){
    txt += "<tr><td colspan ='6'><button onclick='thanhtoan()'>Thanh Toán </button></td></tr>";
  }
  return txt;

}
function motsp_giohang(giohang){
  let txt="";
  let thanhtien = giohang.getgiasp()*giohang.getsoluong();
  txt += '<td width="20%"><label hidden>'+giohang.getmasp()+'</label> <p>'+giohang.gettensp() +'</p></td>'
  txt += '<td width="20%"> <img heigth="40px" width="60px" src ="'+ giohang.gethinhsp()+'"></td>';
  txt += '<td width="20%"> <p><span>'+giohang.getgiasp()+'</span>&emsp;&emsp;</p> </td>';
  txt += '<td width="15%" align="center"><input name="soluong" type="number" disabled value="'+ giohang.getsoluong() +'"min="1" </td>';
  txt += '<td width="20%"><p><span>'+thanhtien+'</span></p></td>';
  txt += '<td width="5%"> <button onclick="xoaspgiohang(this)">Xóa</button></td>';
  return txt;
}
function showsanpham(){
  document.getElementById('danhsachsp').innerHTML = xuatgiohang(giohangs);
}
function xoaspgiohang(x){
  let bnt = x.parentElement.parentElement;
  let masp = bnt.children[0].children[0].innerText;
  let kt = kiemtragh(masp);
  let soluong = document.querySelector('input[name = "soluong"]').value;
  if(soluong >= 1){
    giohangs.splice(kt,1);
    bnt.remove();
  }
}

