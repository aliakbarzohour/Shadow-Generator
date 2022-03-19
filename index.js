// Start Coding Shadow Generator ...

// =========================================================
// Code for Notification
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function() {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
// =========================================================