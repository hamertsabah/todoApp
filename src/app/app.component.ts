import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Bunun amacı appcomponentini nerde kullanacağımızı belirlemesidir. Yani appComponentini çapırmak için gerekli olan bir etiket gibi düşünebiliriz. Bu html içerisinde bir yapıcık olarak kullanılıyor.
                      //Biz bunu htmlde tanımlayarak componenti oraya aktarmış oluyoruz. Yani biz app-root'u html'de çağırdığımız zaman aslında sayfaya yüklenecek olan index.htmldir. app-root yazan yere 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
}
//app.component.ts'e neden ihtiyacımız var?.. misal yukarıda bir title tanımladık, yada misal burada veri tabanından bilgileri almak için gerekli kodlar burada olabilir...misal buraya gelecek olan bir ürün listesi olabilir.
//..Bu listeyi html'de kullanmak istersek  '{{ }}' şeklinde çağırmış olacağız... 
//Yukarıda @component içerisinde misal kullanacağımız 3 adet dosyayı tanımladık. Misal bir menü dosyası tanımlamak isteseydik yine oraya tanımlayacaktık...
//Maksadımız yan menüde aşağıda index.html'ye taşımak üzere yukarıdaki app kısmının altındaki dosyalarda işlemler yaparak index'e aktarmaya çalışmak maksadımız...
