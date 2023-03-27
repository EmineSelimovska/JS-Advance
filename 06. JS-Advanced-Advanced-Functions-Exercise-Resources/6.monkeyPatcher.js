function solution(command) {
    if(command === 'upvote') {
      return this.upvotes++;
    }
    if(command === 'downvote'){
      return this.downvotes++;
    }
    let upvote = this.upvotes;
    let downvote = this.downvotes;
    let totalVote = upvote + downvote;
    let ballance = upvote - downvote;
  
    function ratingState() {
      if(totalVote < 10){
          return 'new';
      }
      if(upvote > totalVote * 0.66){
          return 'hot';
      }if(ballance >= 0 && totalVote > 100){
          return 'controversial';
      }if(ballance < 0){
          return 'unpopular';
      }
      
      return 'new'
    }
    if(totalVote > 50){
      let inflateVote = Math.ceil(Math.max(upvote,downvote) * 0.25);
      return [upvote + inflateVote, downvote + inflateVote,ballance,ratingState()];
    }
      return [upvote,downvote,ballance,ratingState.call(this)];
  }



let post = {
    id: '3',
    author: 'emil', 
    content: 'wazaaaaa', 
    upvotes: 100,
     downvotes: 100 
    }; 
solution.call(post, 'upvote'); 
solution.call(post, 'downvote');
 let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
 solution.call(post, 'downvote'); // (executed 50 times)
  score = solution.call(post, 'score');// [139, 189, -50, 'unpopular'] 
  console.log(score);