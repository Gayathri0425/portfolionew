let likeBtn=document.querySelector('#likes-btn');
let dislikeBtn=document.querySelector('#dislikes-btn');
let likeEle=document.querySelector('#likes');
let dislikeEle=document.querySelector('#dislikes');
let totalEle=document.querySelector('#totalcount');

let likes=0;
let dislikes=0;
let total=0;

likeEle.textContent=likes;
dislikeEle.textContent=dislikes;
totalEle.textContent=likes+dislikes;

function likecount()
{
    likes++;
    likeEle.textContent=likes;
    newupdate();

}
likeBtn.addEventListener('click',likecount)

function dislikecount()
{
    dislikes++;
    dislikeEle.textContent=dislikes;
    newupdate();

}
dislikeBtn.addEventListener('click',dislikecount)

function newupdate()
{
    totalEle.textContent=likes+dislikes;
}