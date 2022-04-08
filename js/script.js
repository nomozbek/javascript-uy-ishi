var welcome = alert('Hush Kelibsiz');
var nameOfUser = prompt('Ism sharifingiz');
var surnameOfUser = prompt('Familiyangiz');
var ageOfUser = prompt('Yoshingiz nechida?');
var nationalityOfUser = prompt('Millatingiz?');
var positionOfUser = prompt('Oldin qayerda ishlagansiz?');

var question = confirm('Savollarga boshqatdan javob bermoqchimisiz?')

if(question){
  alert('Unda saytni bir "Refresh" qilib yuboring ;)')
}
else{
  alert('Siz "Отмена" tugmasini bosdingiz')
}


console.log(`Ism: ${nameOfUser}\n
  Familiya:${surnameOfUser}\n
  Yosh:${ageOfUser}\n
  Millati:${nationalityOfUser}\n
  Ish joyi:${positionOfUser}`
);


