class HelloWorld {
  constructor(public message: string) {}
}

var hello = new HelloWorld('Hello TypeScript');

console.log(hello.message);
