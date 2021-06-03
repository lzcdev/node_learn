// try {
  interview(function(res) {
    if(res instanceof Error) {
      return console.log('cry')
    }
    console.log('smile')
  })
// } catch (err) {
//   console.log('cry', err) 
// }

function interview(callback) {
  setTimeout(() => {
    if(Math.random() < 0.1) {
      callback('success')
    } else {
      // throw new Error('fail')
      callback(new Error('fail'))
    }
  }, 500);
}