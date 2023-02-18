function generate(){
    let kata = document.getElementById("index").value
    let hasil = ''
    //buat perulangan untuk mengakses semua karakter dan menentukan indexnya
    for(let i = 0; i < kata.length; i++){
        hasil += "<tr>"
        hasil += "<td>"
        hasil += kata[i]
        hasil += "</td>"
        hasil += "<td>"
        hasil += i
        hasil += "</td>"
        hasil += "</tr>"
        document.getElementById("result").innerHTML = hasil;
    }
}