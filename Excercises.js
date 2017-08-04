function tri_sum(n) {
  var r = 0;
  //var r = 1;
  for (var i = 1; i < n; i++) {
    r += tri(i);
  }

  return r;
}

function tri(n) {
  if (n < 1) {
    return 0;
  } else {
    var r = 0;

    for (var j = 1; j <= n; j++) {
      r += j;
    }

    return r;
  }
}

function fib(n, i) {
  if (i < n) {
    i++;
    n = fib(n - 1, i - 1) + fib(n - 2, i - 1);
  }

  return n;
}

function fibo(n) {
  var i = 1;

  return fib(n, i);
}

/*
for (var i = 0; i < 10; i++) {
  console.log("\n" + i);
  console.log("tri_sum: " + tri_sum(i));
  console.log("fibo  " + fibo(i));
}
*/
