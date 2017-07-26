Baca dan Simpan soal
Baca dan simpan soal1
Baca dan simpan soal2
Baca dan simpan soal3

simpan  human1{
simpan nama  [tono,budi;]
simpan soal  ['b','c']
simpan soal1 ['c','a']
simpan soal2 ['a','b']
simpan soal3 ['a','c']
}

	simpan nila1 2;
	simpan nama sama dengan human1.nama.length;
	simpan jawabanbenar 3;
	simpan jawabansalah 3;

//constructor function
Di dalam function jawaban masukan A,B,C sebagai parameter.
this.A mengacu pada parameter A
this.B mengacu pada parameter B
this.C mengacu pada parameter C
 endfunction
//lakukan instantiate
simpan jawaban1 lakukan isntantiate new jawaban masukan objeckbaru 
simpan jawaban2 lakukan instantiate new jawaban masukan objeckbaru
simpan jawaban3 lakukan instantiate new jawaban masukan objeckbaru
simpan jawaban4 lakukan instantiate new jawaban masukan objeckbaru
//isi jawban
simpan jawabanya1=jawab1.jawabanA
simpan jawabanya2=jawab2.jawabanC
simpan jawabanya3=jawab3.jawabanB
simpan jawabanya4=jawaba4.jawabanA
//soal
tampilakan soal
tampilkan jawaban1.A tambahkanjawab1.B tambahkan jawab1.C
tampilkan jawba1.A
jika jawabanya1 dama dengan jawab1.A
	tampilkan 'kamu benar '
lain 
tampilkan 'coba lagi'

//soal1
tampilakan soal1
tampilkan jawaban2.A tambahkanjawab2.B tambahkan jawab2.C
tampilkan jawba2.C
jika jawabanya1 dama dengan jawab2.C
	tampilkan 'kamu benar '
lain 
tampilkan 'coba lagi'

//soal2
tampilakan soal2
tampilkan jawaban3.A tambahkanjawab3.B tambahkan jawab3.C
tampilkan jawba3.jawbanB
jika jawabanya3 dama dengan jawab3.B
	tampilkan 'kamu benar '
lain 
tampilkan 'coba lagi'

//soal3
tampilakan soal3
tampilkan jawaban4.A tambahkanjawab4.B tambahkan jawab4.C
tampilkan jawba4.jawbanA
jika jawabanya3 dama dengan jawab4.A
	tampilkan 'kamu benar '
lain 
tampilkan 'coba lagi'

function pengguna
	untuk i sama dengan 0 dan i lebih kecil dari human1.nama.length; maka i terus bertamabah 
		jika hunman1.nama[i]sama dengan 'tono','budi'
			tampilkan "nama" +human1.nama[i];
			tampilkan "jawaban :" +human1.soal[i];
			tampilkan "jawaban :" +human1.soal1[i];
			tampilkan "jawaban :" +human1.soal2[i];
			tampilkan "jawaban :" +human1.soal3[i];
		jika Human1.soal[i]==='a'
				nilai +=2
			lain jika human1.soal1[i]==='c'
				nilai +=2
			lain jika human1.soal2[i]===='b'
				nilai +=2
			lain jika huma1.soal3[i]==='a'
				nilai +=2
		selain 
				nilai-=1

		endfunction
			panggil function


	tampilkan 'total jawaban benar :' jawbanbenar
	tampilkan 'total jawaban salah :' jawabansalah
	tampilkan  'total nilai :' jawaban benar*nilai 'point'