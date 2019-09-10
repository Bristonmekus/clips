
// access the clip board

const x = "Clip me";
// const y = navigator.clipboard.writeText(x).then(function() {
//         alert(x);
//       }, function(err) {
//         alert(err);
//       });

navigator.clipboard.readText().then(
    (clipText) => {
        document.querySelector(".clip").innerText += clipText;
        // console.log(clipText, ": from clip board: ");
        }
    );