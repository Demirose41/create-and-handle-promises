function stretch(timeLeft) {
  // refactor your code from phase 1
  return new Promise((resolve, reject) => {
    if( timeLeft < 1000) return reject('stretch')
    setTimeout(() => {
      console.log('done stretching');
      resolve(timeLeft - 1000)
    }
    , 1000);
  })
  // .catch( reason => console.error("Not enough time to stetch!", reason ));
}


function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if(timeLeft < 500) return reject('run on treadmill')
      setTimeout(() => {
        console.log('done running')
        resolve(timeLeft - 500)
      }, 500)
  })
  // .catch( reason => console.error("not enough time to run on treadmill!", reason));
}


function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if(timeLeft < 2000) return reject('lift weights');
    setTimeout(() => {
      console.log('done lifting');
      resolve(timeLeft - 2000)
    }, 2000)
  })
  // .catch( reason => console.error("not enough time to lift weights"))
}


function workout(totalTime) {
  stretch(totalTime)
  .then(timeLeft => runOnTreadmill(timeLeft))
  .then(timeLeft => liftWeights(timeLeft))
  .then(timeLeft => console.log(`done working out wiht  ${timeLeft/1000} seconds left`))
  .catch( reason  => console.error('Error: your dont have enough time to ', reason));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left