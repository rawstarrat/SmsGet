document.getElementById("downloadButton").addEventListener("click", function() {
    let loadingText = document.getElementById("loading");
    loadingText.style.display = "block";
    loadingText.innerHTML = "📡 Menghubungkan ke server...";

    setTimeout(() => {
        loadingText.innerHTML = "📁 Mengunduh file...";
    }, 2000);

    setTimeout(() => {
        loadingText.innerHTML = "✅ Unduhan dimulai!";
    }, 4000);

    setTimeout(() => {
        loadingText.style.display = "none";
    }, 6000);
});
