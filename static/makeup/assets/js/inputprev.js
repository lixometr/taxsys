let file = document.querySelectorAll('.file-button');
let imgtag = document.querySelectorAll(".myimage");

for (let index = 0; index < file.length; index++) {
    const element = file[index];


    element.addEventListener('change', function() {

        let selectedFile = event.target.files[0];
        let reader = new FileReader();
        imgtag[index].title = selectedFile.name;

        reader.onload = function(event) {
            imgtag[index].src = event.target.result;

        };

        reader.readAsDataURL(selectedFile);
    })

}