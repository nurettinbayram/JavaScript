//# Uygulama Tamament bos terminale npm init ile projeyi baslat.
/*

|-Proje olusturulacak olan pakete konumlan
|-(npm init) ile packege.json dosyasini olustur.
|-Buradaki tum sorulara enter yapip kurulum tamamlanabilir
|-Yada (npm init --yes) komutu ile sorular atlatilabilir.
|-(https://www.npmjs.com/) sitesinden istenilen paket incelenebilir.
|-Package.json modulunde indirilien paketler dependency bolumu altinda yer alir.
|-node_modules clasoru silinse bile (npm install) komutu ile dependency kisminda bulunan paketler kurulur.
|-(_under_score = require("underscore");) Seklinde paket projeye dahil edilir.
|-(node App.js) komutu ile proje calistirilir.
|-(npm i jquery  yada  npm install jquery) seklinde paketler indirilir.
|-(npm i jquery@2.2.2) seklinde paket versiyonu belirlenebilir
|-(npm install jquery) seklinde indirilen paketler dependencies bolumune kaydedilir ve bunlar yerel pakettir 
|-Yani bu paketler yanlizca bu proje icin gecerlidir.
|-(npm install webpack --save-dev) yani arkasina (--save-dev) komutu eklenince bu durumde devDependencies kismina kaydedilir.
|-Bu uygulama gelistirme asamasinda bize kolaylik saglayan paketler bu sekilde indirilebilir.
|-Uygulama bittikten sonra herhangi bir bagimliligi kalmiyor bu paketlere.
|-Buda bir yerel paket ancak uygulama bittikten sonra bir bagimliligi kalmiyor.
|-(npm install live-server --global) bu sekildede paketler global yani bilgisayara tuklenir ve her projede calistirilabilir durumda olur.
|-(npm list -g) komutu ile global olarak yuklenen paketlerin listesini verir.
|-(^5.105.4) Anlamlari ne:(major.minor.patch)
|- ||  |  |-Herhangi bir bug ciktiginda bu arttirilir.
|- ||  |----Herhangi yeni bir ozellik eklendiginde bu arttirilir.
|- ||-------Ana yada koklu bir degisiklige gidildiginde bu degistirirlir.
|- |--------Sembol minor ve patch bolumundeki degisiklikleri otomatik indirir ancak major degismesi durumunda bunu indirmek projede calismayabilir bu yuzden major sabit tutulur.
|-(npm uninstall jquery) komutu ile paket kaldirilir.
|-(npm uninstall -g <paket_adi>) seklinde global paketlerde kaldirilir.

*/

const _under_score = require("underscore");

var numbers = [10, 5, 100, 2, 1000];
console.log(_under_score.min(numbers));
