var soal ='1. Berapakah hasil dari perkalian 4x4=?';
var soal1='2. Berpakah hasil perkalian dari 1 x 2 =  ?';
var soal2='3. Dimanakah ibukota indonesia?';
var soal3='4. siapakah Gubernur Jawba Barat  ?';

var Human1={
  nama       :['tono','budi'],
  soal      :['b','c'],
  soala1     :['c','a'],
  soala2     :['a','b'],
  soala3     :['a','c'],
};
  var nilai =2;
  var nama = Human1.nama.length;
  var jawabanbenar =3;
  var jawabansalah =1;

 function jawaban(A,B,C){
    this.A       = A;
    this.B       = B;
    this.C       = C;
};



var jawab1 = new jawaban('16', '8', 'semua salah');
var jawab2 = new jawaban('5', '10', 'semua salah');
var jawab3 = new jawaban('bandung','jakarta','surabaya');
var jawab4 = new jawaban('Ahmad Heryawan ' ,'Dedi Mizwar','Ridwankamil');
//isi jawaban
var jawabanya1=jawab1.A;
var jawabanya2=jawab2.C;
var jawabanya3=jawab3.B;
var jawabanya4=jawab4.A;
//soal ke1
console.log(soal);
console.log('Pilihanya adalah :'+ 'a. '+ jawab1.A + '  b.  ' + jawab1.B + ' c.  ' + jawab1.C);
console.log(' a. '+ jawab1.A)

  if(jawabanya1 ==jawab1.A){
  console.log('Kamu benar ');
}
else {
  console.log('Coba Lagi ya');
}

//soal ke2
console.log(soal1);
console.log('pilihanya adalah :' +'a. ' + jawab2.A + ' b.  ' + jawab2.B + ' c.  ' + jawab2.C);
console.log(' c. '+ jawab2.C)

  if(jawabanya2 ==jawab2.C){
  console.log('kamu benar');
}
else {
  console.log('coba Lagi ya');
}

//soal ke3
console.log(soal2);
console.log('pilihanya adalah : ' +'a. '+ jawab3.A + ' b.  ' + jawab3.B + ' c.  ' + jawab3.C);
console.log('b. '+jawab3.B)
 
    if(jawabanya3 ==jawab3.B){
  console.log('Kamu benar');
}
else {
  console.log('coba Lagi ya');
}

//soal ke 4
console.log(soal3);
console.log('pilihanya adalah : ' +'a ' + jawab4.A + ' b.  ' + jawab4.B + ' c.  ' + jawab4.C);
console.log('a. ' +jawab4.A);    
    
      if(jawabanya4 ==jawab4.A){
  console.log('kamu benar');
}
else {
  console.log('coba lagi ya');
}
function pengguna(){
        for(i=0;  i<Human1.nama.length; i++)
          {
            if(Human1.nama[i]==='tono','budi')
            {
              console.log("nama: " +Human1.nama[i]);
              console.log("jawaban: " +Human1.soal[i]);
              console.log("jawaban: " +Human1.soala1[i]);
              console.log('jawaban: ' +Human1.soala2[i]);
              console.log('jawaban: ' +Human1.soala3[i]);
            }if(Human1.soal[i]==="a")
              {
                      niali +=2
              }else if(Human1.soala1[i]==="c")
                {
                      nilai +=2;
                }else if(Human1.soala2[i]==="b")
                  { 
                      nilai +=2;
                  }else if(Human1.soala3[i]==='c')
                    {
                      nilai+=2;
                    }
              else{
                      nilai -=1;
              }
          }
         }pengguna();
           
    console.log ('total jawaban beanar :' + jawabanbenar );
    console.log ('total jawaban salah :' +jawabansalah );
    console.log ( 'total nilai :' +jawabanbenar*nilai + 'poin');
    