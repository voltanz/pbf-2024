# 05 | Routing

## Praktikum 1: Membuat routing sederhana

Pada praktikum ini, Anda akan membuat 3 halaman yang di-handle oleh router, yaitu halaman `home`, halaman `about`, dan halaman `profile`. Silakan lakukan langkah-langkah praktikum berikut ini.

1. Persiapkan project dengan memanfaatkan template repository yang telah dipersiapkan di alamat [https://github.com/dhanifudin/routing-demo](https://github.com/dhanifudin/routing-demo) dan gunakan tombol **Use this template** kemudian pilih **Create a new repository**.
2. Clone project ke lokal laptop anda dan lakukan instalasi dependencies dengan menjalankan perintah berikut.
```
npm install
```
3. Silahkan buka project tersebut dengan menggunakan VSCode dan perhatikan file yang ada dalam folder app.
4. Routing di ReactJS dengan NextJS memanfaatkan organisasi penamaan folder dan file pada folder app. Silahkan tambahkan file page.tsx di dalam folder app, dan buatlah komponen dengan kode berikut.
```tsx
export default function Home() {
  return <h1>Welcome to Home</h1> ;
}
```
5. alankan project dengan menggunakan perintah npm run dev di terminal VSCode. Dan silahkan buka browser pada alamat url [http://localhost:3000](http://localhost:3000)
6.  pada project di VSCode, akan terdapat sebuah file yang akan digenerate yaitu layout.tsx. File ini akan secara otomatis digenerate jika tidak ditemukan. Perhatikan susunan kode yang ada di dalamnya. Anda akan menemukan susunan html yang di dalamnya terdapat props children. Props children akan direplace oleh komponen sesuai dengan routing.
7. Untuk membuat halaman routing /about dengan NextJS, silahkan buat folder /about dalam /app dan buat file dengan nama page.tsx. Kemudian buat function komponen seperti pada kode berikut.
8. Lakukan commit ke project setelah menyelesaikan semua Praktikum 1. Jangan lupa untuk mendokumentasikan dengan tangkapan layar dan menyimpan di folder /images di project anda.
```tsx
export default function About() {
  return <h1>Welcome to About</h1> ;
}
```
>**Todo**: Buatlah halaman /profile yang menampilkan isi biodata anda dengan menggunakan routing di NextJS.

Output about/page.tsx
![Output](docs/ss1.png)

Output profile/page.tsx
![Output](docs/ss2.png)