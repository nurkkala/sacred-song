import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    template: `
    <h1>Hello</h1>
    <div>
        Hello, Angular 2!
    </div>
    `
})
class HelloWorld { }

bootstrap(HelloWorld);
