$(document).ready(() => {
    $('#addPost').click(() => {
        let title = $('#title').val();
        let body = $('#body').val();

        if(title.length<10 || body.length<20){
            alert("Please fill the details");
        }

        let userId = JSON.parse(window.localStorage.user).id;

        $.post('/api/post',{userId,title,body},(post) => {
            if(post){
                window.location.href = "/";
            }
        })
    })
})