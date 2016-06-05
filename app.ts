import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";

@Component({
    selector: 'hello-world',
    templateUrl: 'app.html'
})
class HelloWorld {
}

bootstrap(HelloWorld);
