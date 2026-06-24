const canvas = document.getElementById("canvas");

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 600, 450);
}
else { 
    const errorBox = document.getElementById("unsupport-toggle");
    errorBox.style.display = "block";
}