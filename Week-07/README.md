#  07 | Context

## Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Context

### Langkah 1: Buat project baru dan repo baru di GitHub

Silakan buat project baru seperti berikut dan repo baru dengan nama **#07-belajar-context-nextjs**

![Output](img/ss1.png)

### Langkah 2: Buat struktur folder dengan prinsip atomic design

Buatlah folder baru di `src/components` seperti berikut ini

![Output](img/ss2.png)

### Langkah 3: Buat komponen atom baru

Buat file baru di `src/components/atoms/heading.tsx` berisi kode sebagai berikut.

```tsx
export default function Heading({ level, children }: { level: number; children: any }) {
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}
```

Kemudian buat file baru di `src\components\atoms\section.tsx` berisi kode berikut.
```tsx
export default function Section({ children }: { children: any }) {
    return (
        <section className="section">
            {children}
        </section>
    );
}
```

Lalu bagian `MainPage` buat file baru di `src\components\templates\main_page.tsx` berisi kode sebagai berikut.
```tsx
import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading level={1}>Title</Heading>
            <Section>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Section>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Section>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}
```

### Langkah 4: Ubah isi kode page.tsx dan run

Ubahlah kode di `src\app\page.tsx` seperti berikut. Lalu run dan lihat hasilnya di browser Anda.
```tsx
import MainPage from "@/app/components/templates/main_page";

export default function Home() {
  return <MainPage />;
}
```

> **Soal 1**
> Capture hasilnya dan buatlah laporan di **README.md**. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
>
> Jangan lupa push dengan pesan commit: `"W07: Jawaban soal 1"`.

Jawab:

![Output](img/ss3.png)

Dari hasil run di atas kita menampilan teks yang berada pada main_page.tsx