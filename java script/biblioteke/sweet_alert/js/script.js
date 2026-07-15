function obrisiUcenika(){;
// alert();
// confirm();

Swal.fire({
    title: "jeste li sigurni da želite obrisati korisnika",
    text: "ova akcija se ne može poništiti!",
    icon: "warning", //succes i danger error question - za druge ikonice
    showCancleButton: true,
    confirmButtontext: "Da",
    cancleButtonText: "Ne"
}).then((result)=>{
    if(result.isConfirmed){
        swal.fire("obrisano!", "ucenik je uklonjen", "success");
    }
});
}