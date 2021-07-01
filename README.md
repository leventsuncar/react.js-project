# Giriş

Bu benim neyi ne kadar öğrendiğimi anlamak için yaptığım bir frontend projesi.
Görsellikten ziyade backendden veri çekmeye odaklandım.
Öğrendikçe daha güzel gözüken tasarımlar yapabileceğimi düşünüyorum. 

Projenin backend kısmı: https://github.com/leventsuncar/hrms



# Ekran Görüntüleri

![iş arayanlar](https://user-images.githubusercontent.com/80010942/124186987-c563da00-dac5-11eb-95c0-2d36f14e304d.PNG)

Burada iş arayanların ufak bir listesi var. Bu liste bilgileri backend JobSeekerDto dan geliyor.

Giriş yap ve kayıt ol butonları görsel olarak doğru çalışıyor.
Giriş yap butonuna tıklayınca giriş yapmış biri gibi gözüküyoruz ve kayıt ol butonu kayboluyor.
Başka işlevi yok. Kayıt ol butonu işlevsiz.



![iş arayan detayları](https://user-images.githubusercontent.com/80010942/124187164-1378dd80-dac6-11eb-9f17-9ac8b88af3d8.PNG)

Burası kişi ayrıntıları. Bilgiler JobSeekerCVDto dan geliyor.

![İş ilanları tablosu 2](https://user-images.githubusercontent.com/80010942/124187686-dc56fc00-dac6-11eb-9af7-edb98cb61a6a.PNG)

İş ilanları tablosu. İş Pozisyonuna tıklandığında ilan ayrıntıları görülebiliyor.
Tabloda pagination yok. Altındaki numaralar sadece görsel. Onu da en yakın zamanda yapacağım. Backend de pagination desteği mevcut.7

![ilan ayrıntı](https://user-images.githubusercontent.com/80010942/124187999-54bdbd00-dac7-11eb-97a0-57b8a2759e84.PNG)

Pek ayrıntılı değil ama burası ilan ayrıntı sayfası

![iş ilanı formu 2](https://user-images.githubusercontent.com/80010942/124187777-f8f33400-dac6-11eb-88f6-7af31ae08c5f.PNG)

Bu form sayesinde yeni iş ilanı oluşturulabiliyor.



Database de var olmayan bir iş pozisyonu veya şehir eklemeye kalkarsanız sorunla karşılaşmazsınız.
İlan ekleme sayfasında girdiğiniz şehir ve iş pozisyonu database de tablosuna eklenecektir.
Yalnız şirket konusu farklı sadece var olan şirket ismiyle iş ilanı oluşturulabilir.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
