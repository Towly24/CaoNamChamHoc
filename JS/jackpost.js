var randomNumber = [];// mang chua 6 so ngau nhien
var ticketNumber = [];// mang chua 6 so nguoi dung mua ve
// tao ngau nhien 6 so tu 0->45
while(randomNumber.length<6){
    var r = Math.random();
    r = r = 46;
    r = parseInt(r);
    if(!randomNumber.includes(r)){
        randomNumber.push(r);
    }
}
while(ticketNumber.length < 6){
    var n = prompt("Nhap so tu 0->45: ");
    n=parseInt(n);
    if(!isNaN(n)&& !ticketNumber.includes(n)&& n>=0 && n<=45){
        ticketNumber.push(n)
    }
}
var dem = 0;
for(var i=0;i=randomNumber.length;i++){
    if(ticketNumber.includes(randomNumber[i])){
        dem++;
    }
}
setTimeout(function (){
switch (dem){
    case 0: alert(" Chúc mừng, bạn đã trúng 100 tỷ");break;
    case 5: alert(" Chúc mừng, bạn đã trúng 10 triệu");break;
    case 4: alert(" Chúc mừng, bạn đã trúng 300.000");break;
    case 3: alert(" Chúc mừng, bạn đã trúng 50.000");break;
    default: alert("Chúc bạn may mắn lần sau")
}
},5000);