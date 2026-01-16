# Guia de Aprendizado - Fichas RPG

## 🎯 Estrutura do Projeto

```
fichas-app/
├── src/
│   ├── App.tsx           ← Componente principal (vazio para você programar)
│   ├── types/
│   │   └── index.ts      ← Tipos/interfaces da aplicação
│   ├── services/
│   │   ├── db.ts         ← CRUD IndexedDB (stubs com TODO)
│   │   └── pdfParser.ts  ← Parser de PDF (stubs com TODO)
│   ├── components/       ← Crie seus componentes aqui
│   └── public/
│       └── systems-config.json  ← Configuração dos sistemas RPG
└── package.json          ← Dependências: idb, pdf.js, pdf-lib
```

## 🚀 Como Começar

### 1. **Entenda os Tipos** (src/types/index.ts)
- `Character` - Personagem com atributos e talentos
- `SystemConfig` - Configuração de sistema (D&D, Pathfinder, etc)
- `PDFParsingResult` - Resultado de parsing de PDF

### 2. **Implemente o db.ts** (src/services/db.ts)
Substitua os TODOs com as funções reais:
- `initDB()` - Inicializar IndexedDB com object stores
- `createCharacter()`, `getCharacter()`, `getAllCharacters()`, etc

**Exemplo de inicialização:**
```typescript
db = await openDB<DBSchema>(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('characters')) {
      const store = db.createObjectStore('characters', { keyPath: 'id' });
      store.createIndex('systemId', 'systemId');
    }
  },
});
```

### 3. **Implemente o pdfParser.ts** (src/services/pdfParser.ts)
- `extractTextFromPDF()` - Extrair texto de PDF com pdf.js
- `parsePDFWithSystem()` - Mapear dados do PDF para campos da ficha

**Dica:** Use regex do systems-config.json para encontrar atributos

### 4. **Crie Componentes React** (src/components/)
Sugestões:
- `Dashboard.tsx` - Lista de fichas
- `CharacterEditor.tsx` - Formulário de edição
- `PDFUploader.tsx` - Upload e parsing de PDF

### 5. **Integre no App.tsx**
Crie a navegação entre views e teste as funcionalidades

## 📚 Recursos Úteis

### Libs Disponíveis
- **idb** - IndexedDB wrapper com TypeScript
- **pdf.js** - Leitura de PDFs
- **pdf-lib** - Geração de PDFs preenchidos
- **React 18** - UI
- **Vite** - Build super rápido

### Dados de Exemplo (public/systems-config.json)
```json
{
  "systems": [
    {
      "id": "dnd5e",
      "name": "D&D 5ª Edição",
      "attributes": { ... },
      "pdfMapping": { ... }
    }
  ]
}
```

## 💡 Dicas

1. **Use TypeScript** - Os tipos já estão definidos em `src/types/index.ts`
2. **Teste no DevTools** - Abra DevTools → Application → IndexedDB para debugar
3. **Comece com o básico** - CRUD sem PDF → Depois adicione parsing
4. **Tailwind CSS** - Já pode usar (classes como `className="p-4 bg-blue-500"`)

## 🏃 Próximos Passos

```bash
cd fichas-app
npm run dev           # Dev server em http://localhost:5173
npm run build         # Build para produção
```

Boa sorte! 🎲

