
$(document).ready(function() {
    $('#search-form').on('submit', function(e) {
        e.preventDefault();
        const query = $('#search-input').val();
        $.post('/search', { query }, function(data) {
            $('#search-result').text(data);
        });
    });
});

