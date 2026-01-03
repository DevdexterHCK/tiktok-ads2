# TikTok Ads - Site Completo

## 📁 Estrutura do Projeto

```
tiktok-ads2/
├── assets/
│   ├── css/
│   │   ├── base.css          # Reset e estilos base
│   │   ├── components.css     # Componentes reutilizáveis
│   │   ├── screens.css        # Estilos das telas
│   │   ├── modals.css         # Estilos dos modais
│   │   └── responsive.css     # Media queries
│   ├── js/
│   │   ├── router.js          # Navegação SPA
│   │   ├── modal.js           # Gerenciamento de modais
│   │   ├── counter.js         # Contadores e animações
│   │   ├── loading.js         # Animações de carregamento
│   │   ├── pix-form.js        # Validação formulário PIX
│   │   ├── ui-components.js   # Componentes de UI
│   │   └── main.js            # Entry point
│   └── images/                # Todas as imagens
├── index.html                 # Arquivo HTML principal
└── README.md                  # Este arquivo

```

## 🚀 Como Usar

### Desenvolvimento Local

1. Abra o arquivo `index.html` diretamente no navegador
2. Ou use um servidor local:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server

   # VS Code - Live Server Extension
   Clique com botão direito em index.html > Open with Live Server
   ```

## 📝 Estrutura de Telas

### Tela #one
- **Descrição**: Tela principal com saldo e tarefas
- **Funcionalidades**:
  - Exibição de saldo animado
  - Botão de saque
  - Lista de tarefas concluídas
  - Popup automático após 3 segundos

### Tela #two (Modal)
- **Descrição**: Popup de bônus
- **Funcionalidades**:
  - Exibição de valor do prêmio
  - Contador regressivo
  - Botão de confirmação

### Tela #three
- **Descrição**: Página de resgate de recompensas
- **Funcionalidades**:
  - Seleção de valor para saque
  - Métodos de pagamento
  - Informações de saldo

### Tela #four (Modal)
- **Descrição**: Modal de métodos de saque
- **Funcionalidades**:
  - Seleção de PIX

### Tela #five (Modal)
- **Descrição**: Formulário de cadastro PIX
- **Funcionalidades**:
  - Campo de nome
  - Seleção de tipo de chave
  - Validação em tempo real

### Tela #six (Modal)
- **Descrição**: Seleção de tipo de chave PIX
- **Funcionalidades**:
  - CPF
  - E-mail
  - Celular
  - Chave Aleatória

### Tela #seven
- **Descrição**: Tela de carregamento
- **Funcionalidades**:
  - Barra de progresso animada
  - Textos informativos

### Tela #nine
- **Descrição**: Página de confirmação
- **Funcionalidades**:
  - Exibição de dados preenchidos
  - Informações sobre taxa de confirmação
  - Botão de ação externa

## 🎨 Módulos CSS

### base.css
- Reset CSS
- Estilos base do body e html
- Tipografia padrão
- Classes utilitárias

### components.css
- Botões
- Cards
- Formulários
- Badges
- Ícones

### screens.css
- Estilos específicos de cada tela
- Layouts das páginas

### modals.css
- Estilos de overlay
- Modais e popups
- Animações de abertura/fechamento

### responsive.css
- Media queries
- Adaptações para mobile/desktop

## 📱 JavaScript Modules

### router.js
**Responsabilidades**:
- Gerenciamento de rotas SPA (Single Page Application)
- Transição entre telas
- Manipulação de histórico do navegador
- Scroll reset

**Principais Funções**:
- `initRouter()` - Inicializa o sistema de rotas
- `showScreen(id, push)` - Exibe uma tela específica
- `handleScreenTransition(id)` - Gerencia transições e ações específicas de cada tela

### modal.js
**Responsabilidades**:
- Abrir e fechar modais
- Gerenciar overlay
- Controlar scroll do body
- Timer de popup automático

**Principais Funções**:
- `showModal(id)` - Abre um modal
- `closeModal(id)` - Fecha um modal
- `schedulePopupForOne()` - Agenda popup para tela #one
- `closeAllModals()` - Fecha todos os modais abertos

### counter.js
**Responsabilidades**:
- Animação de valores monetários
- Contadores regressivos
- Formatação de moeda BRL

**Principais Funções**:
- `animateCurrencyCounter(element, forceReset)` - Anima valor monetário
- `iniciarContadorInline(tempo)` - Inicia contador inline
- `iniciarContadorPopup(tempo)` - Inicia contador de popup

### loading.js
**Responsabilidades**:
- Animações de carregamento
- Barras de progresso
- Textos de loading

**Principais Funções**:
- `startLoader()` - Inicia loading antigo
- `startNewLoadingAnimation()` - Inicia novo loading (#seven)
- `resetLoader()` - Reseta estado do loading

### pix-form.js
**Responsabilidades**:
- Validação de formulário PIX
- Formatação de campos (CPF, telefone, etc)
- Feedback visual de erros
- Submissão de dados

**Principais Funções**:
- `validateCPF(cpf)` - Valida CPF
- `validateEmail(email)` - Valida e-mail
- `validatePhone(phone)` - Valida telefone
- `formatPixKey(value, type)` - Formata chave PIX
- `checkPixFormValidity()` - Verifica validade do formulário

### ui-components.js
**Responsabilidades**:
- Componentes de interface
- Sticky popup
- Botões interativos
- Preenchimento de dados

**Principais Funções**:
- `initStickyPopup()` - Inicializa popup flutuante
- `initBotoesRowSacar()` - Inicializa botões de saque
- `fillConfirmationPage()` - Preenche página de confirmação

## 🔧 Configurações

### Tempo de Contador
Localizado em `counter.js`:
```javascript
const tempoInicialEmSegundos = 16 * 60 + 38; // 16 minutos e 38 segundos
```

### Delay do Popup
Localizado em `modal.js`:
```javascript
modalTimer = setTimeout(() => {
  // ...
}, 0); // Altere este valor em milissegundos
```

## 🎯 Features

- ✅ SPA (Single Page Application)
- ✅ Navegação com histórico do navegador
- ✅ Modais empilháveis
- ✅ Validação de formulário em tempo real
- ✅ Animações de valores monetários
- ✅ Contadores regressivos
- ✅ Responsive design
- ✅ Código modular e organizado
- ✅ Sem dependências externas (Vanilla JS)

## 📌 Notas Importantes

1. **Segurança**: Dados do formulário PIX são armazenados temporariamente apenas em `history.state` e são limpos após uso
2. **Validação**: Todos os campos do formulário possuem validação cliente-side
3. **Acessibilidade**: Uso de ARIA labels e roles
4. **Performance**: Animações otimizadas com requestAnimationFrame
5. **Mobile First**: Design responsivo com foco em dispositivos móveis

## 🐛 Troubleshooting

### Modais não abrem
- Verifique se todos os arquivos JS estão carregados
- Verifique o console do navegador por erros

### Animações não funcionam
- Certifique-se de que o `data-amount-target` está presente nos elementos
- Verifique se o arquivo `counter.js` está carregado

### Formulário não valida
- Verifique se o arquivo `pix-form.js` está carregado
- Certifique-se de que os IDs dos elementos estão corretos

## 📄 Licença

Este projeto é apenas para fins educacionais e demonstrativos.

## ✨ Melhorias Futuras

- [ ] Adicionar testes unitários
- [ ] Implementar backend real
- [ ] Adicionar mais métodos de pagamento
- [ ] Melhorar acessibilidade
- [ ] Adicionar suporte a PWA
- [ ] Implementar i18n (internacionalização)
