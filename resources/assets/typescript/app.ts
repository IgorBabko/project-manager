import { AppComponent } from './Components/AppComponent';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SelectListService } from './Services/SelectListService';

//enableProdMode();
bootstrap(<Function>AppComponent, [
    ROUTER_PROVIDERS, HTTP_PROVIDERS, SelectListService
]);