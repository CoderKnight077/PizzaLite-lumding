document.getElementById('edit-btn').addEventListener('click', function () {
    document.querySelectorAll('.detail-item input').forEach(function (input) {
        input.disabled = false;
    });
    document.getElementById('edit-btn').style.display = 'none';
    document.getElementById('save-btn').style.display = 'inline-block';
});

document.getElementById('save-btn').addEventListener('click', function () {
    document.getElementById('confirmation-prompt').style.display = 'flex';
});

document.getElementById('yes-btn').addEventListener('click', function () {
    document.querySelectorAll('.detail-item input').forEach(function (input) {
        input.disabled = true;
    });
    document.getElementById('edit-btn').style.display = 'inline-block';
    document.getElementById('save-btn').style.display = 'none';
    document.getElementById('confirmation-prompt').style.display = 'none';
    // Here you can add functionality to save the data if needed.
});

document.getElementById('no-btn').addEventListener('click', function () {
    document.getElementById('confirmation-prompt').style.display = 'none';
});
