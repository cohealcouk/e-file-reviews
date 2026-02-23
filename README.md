# E-file Reviews

Profesjonalna strona z recenzjami frezarek do paznokci i mikromotorów dla techników paznokci w UK.

## 🚀 Szybki Start

Najpierw uruchom serwer deweloperski:

```bash
npm run dev
```

Następnie otwórz [http://localhost:3001](http://localhost:3001) w przeglądarce.

## 📁 Struktura Projektu

```
e-file-reviews/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Główny layout aplikacji
│   │   ├── page.tsx            # Strona główna z hero section
│   │   └── globals.css         # Globalne style CSS
│   ├── lib/
│   │   └── mdx.ts              # Funkcje do zarządzania MDX
│   └── components/             # Komponenty React
├── content/
│   └── articles/               # Artykuły w formacie .mdx
├── package.json
├── tailwind.config.ts
└── postcss.config.mjs
```

## 🎨 Design System

### Paleta Kolorów
- **Primary**: Teal (`#14b8a6`) - przyciski, linki, akcenty
- **Background**: Czysty biały (`#ffffff`) i jasny szary (`#f8fafc`)
- **Text**: Szary hierarchia (`#1e293b`, `#475569`, `#64748b`)

### Typografia
- **Font**: Inter - czysta, nowoczesna czcionka bezszeryfowa
- **Hierarchia**: Pogrubione nagłówki, czytelny tekst

## 📝 Zarządzanie Treścią

### Dodawanie Artykułów
1. Stwórz plik `.mdx` w folderze `content/articles/`
2. Dodaj frontmatter z metadanymi:
   ```yaml
   ---
   title: "Tytuł artykułu"
   description: "Krótki opis"
   date: "2024-02-20"
   author: "Imię autora"
   tags: ["tag1", "tag2"]
   featured: true
   ---
   ```
3. Pisz treść w Markdown z komponentami React

### Dostępne Komponenty MDX
- `<ProductCard>` - Karty produktów z linkami afiliacyjnymi
- `<ProsCons>` - Tabela zalet i wad
- `<ComparisonTable>` - Tabele porównawcze
- `<CallToAction>` - Banery konwersyjne

## 🛠️ Technologie

- **Next.js 14.2.35** z App Router i TypeScript
- **Tailwind CSS v4** z PostCSS
- **MDX** z `next-mdx-remote`
- **Lucide React** - ikony
- **Gray Matter** - parsowanie frontmatter

## 🚀 Deployment

Projekt jest zoptymalizowany pod statyczne generowanie:
- Automatyczne generowanie stron dla wszystkich artykułów
- Optymalizacja SEO
- Szybkie ładowanie dzięki Next.js

## 📞 Funkcjonalności

- ✅ **Strona główna** z hero section i top picks
- ✅ **Dynamiczne artykuły** z routingiem `/reviews/[slug]`
- ✅ **Indeks artykułów** z filtrowaniem po tagach
- ✅ **Responsive design** na wszystkie urządzenia
- ✅ **Clinical aesthetic** - czysty, profesjonalny wygląd

---

## 🎯 Cel Projektu

Stworzenie profesjonalnej platformy do recenzowania sprzętu dla techników paznokci w Wielkiej Brytanii, z:
- Wiarygodnymi, szczegółowymi recenzjami
- Profesjonalnym designem budzącym zaufanie
- Optymalizacją SEO i szybkością działania
- Możliwością monetyzacji przez linki afiliacyjne

Projekt jest w pełni funkcjonalny i gotowy do rozwoju! 🎉
