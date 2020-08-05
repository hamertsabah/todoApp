import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
//Main.ts dosyası angular uygulamasının temel dosyası oluyor.Burda biz uygulamamızın bir tarayıcı üzerinde çalışacağını söylüyoruz.
//..Başlangıç aşamasında da AppModule'ü çalıştır diyoruz. Bu AppModule denen arkadaş dışarıdan hazır olarak gelen ve burada çalıştırılan bir zımbırtı...
//Component nedir?.. Kendi başına çalışan uygulamanın herhangi bir bölümünü icra eden yada görev alan bir  parça gibi düşünebiliriz..
//..misal uygulamanın navigation kısmı, menü kısmı yada  uygulamanın ürün listeleme kısmı yada ürün listeleme içinde yer alan bir ürünü temsil eden bir component gibi düşünebiliriz.
//Bu şekilde parçalara ayırmak kolaylık sağlaması açısından yapılıyor.