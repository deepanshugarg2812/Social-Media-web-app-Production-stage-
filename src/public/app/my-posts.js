function loadPosts(done){
    let userId = JSON.parse(window.localStorage.user).id;
    
    if(userId==undefined){
        alert("Not logged in");
    }

    $.get(`/api/post/${userId}`,{},(posts) => {
        for(let p of posts){
            let obj = $(`<div class="card col-11 col-md-5 mx-1 my-1" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">${p.body.substr(0,200)}...
              <a href="#">Read more...</a>
              </p>
              <div class="row" id="commentBox">
              <input type="text" class="form-control col-8 commentText" placeholder="enter your comment" data-component='${p.id}'>
              <button type="button" class="col-3 offset-1 btn btn-primary submitComm">Submit</button>
              <button type="button" class="col-3 my-2 btn btn-primary">Like</button>
              </div>
            </div>
        </div>`);
            $('#post-container').append(obj);
        }
        done();
    })
}

loadPosts(AddButtonClick);

function AddButtonClick(){
    $('.submitComm').click((event) => {
        let val = event.target.previousElementSibling.value;
        if(val==''){
            alert("Please enter the comment to add comment");
            return;
        }

        let userId = JSON.parse(window.localStorage.user).id;
        let postId = event.target.previousElementSibling.attributes["data-component"].value
        $.post('/api/comment',{title : "Comment",body : val,userId : userId,postId : postId},() => {
            event.target.previousElementSibling.value = '';
        })
    })
}