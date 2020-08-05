import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //Component tanımlamasını module içerisnde declatation kısmında yapıyoruz. Farklı bir component daha olursa buraya yada farklı bir module varsa bunu da yukarı import kısmına alıyoruz...
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //Zaten bir tane olan modulümüzü export ile dışarı açıyoruz ve main'den ulaşıyoruz.
//app.module.ts dosyası ise angular içerisinden gelen modüllerin  ve bizim hazırlamış olduğumuz componentlerin erişim alanı olarak düşünebiliriz.
//Burda biz bir tane paket oluşturuyoruz dışarıya açıyoruz, dışarıdan yani main.ts dosyası içerisinden AppModule ile çalıştırılabilir hale getiriyoruz.
//Ulaştığımız appmodule içerisinde  ilk çalıştırılacak olan component ise appModule içerisinde bootstrap içerisinde yazan appModule sayesinde 