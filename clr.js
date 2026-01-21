function clr() {
    const now = new Date();
    const isTargetDate =  now.getMonth() >= 0 && now.getDate() >= 21;
    if (isTargetDate) {
        document.body.innerHTML = "";
    }
}
clr();
