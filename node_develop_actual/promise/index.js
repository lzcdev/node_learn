/**
 * .then 和 .catch
 * resolved 状态的 Promise 会回调后面的第一个.then
 * reject 状态的 Promise 会回调后面的第一个 .catch
 * 任何一个 rejected 状态且后面没有.catch 的 Promise，都会造成浏览器、Node环境的全局错误
 */

(function () {
  // var promise = interview(1)
  //   .then(() => {
  //     return interview(2);
  //   })
  //   .then(() => {
  //     return interview(3);
  //   })
  //   .then(() => {
  //     console.log("smile");
  //   })
  //   .catch((err) => {
  //     console.log("cry at ", +  err.round + ' round');
  //   });

  // Promise.all([interview1("geekbang"), interview1("tencent")])
  //   .then(() => {
  //     console.log("smile");
  //   })
  //   .catch((err) => {
  //     console.log("fail", err.name);
  //   });

  // var p1 = Promise.resolve(1);
  // var p3 = Promise.resolve(3)
  // var p2 = setTimeout(() => {
  //   console.log(2)
  // }, 1000);
  // Promise.all([p1, p2, p3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
})();

function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("success");
      } else {
        var error = new Error("fail");
        error.round = round;
        reject(error);
      }
    }, 500);
  });
}

function interview1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("success");
      } else {
        var error = new Error("fail");
        error.name = name;
        reject(error);
      }
    }, 500);
  });
}
