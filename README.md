# Evolution API Nodes para N8N - Customized

[![npm version](https://badge.fury.io/js/%40klimp3l%2Fn8n-nodes-evolution-api.svg)](https://badge.fury.io/js/%40klimp3l%2Fn8n-nodes-evolution-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Versão Customizada** do [n8n-nodes-evolution-api](https://github.com/oriondesign2015/n8n-nodes-evolution-api) com melhorias exclusivas e correções.

## 🚀 **Instalação**

### **Via NPM (Recomendado)**
```bash
npm install @klimp3l/n8n-nodes-evolution-api
```

### **Via PNPM**
```bash
pnpm add @klimp3l/n8n-nodes-evolution-api
```

### **Via Yarn**
```bash
yarn add @klimp3l/n8n-nodes-evolution-api
```

### **Direto do GitHub**
```bash
npm install https://github.com/Klimp3l/n8n-nodes-evolution-api.git
```

## ✨ **Melhorias Exclusivas (Customized)**

- ✅ **Campo MimeType**: Input para especificar o tipo MIME em "Enviar Documento"
- ✅ **Correções de bugs**: Resolução de problemas de exibição de campos
- ✅ **Compatibilidade**: Testado com N8N 1.54.4+ e Evolution API 2.2.0+
- ✅ **Manutenção ativa**: Fork mantido e atualizado regularmente
- ✅ **Versão diferenciada**: Pacote único sem conflitos com o original

## 🔍 **Diferenças da Versão Original**

| Recurso | Original | Customized |
|---------|----------|------------|
| Campo MimeType | ❌ Não disponível | ✅ **Disponível** |
| Correções de bugs | ❌ Alguns bugs | ✅ **Corrigidos** |
| Manutenção | ⚠️ Limitada | ✅ **Ativa** |
| Suporte | ⚠️ Básico | ✅ **Personalizado** |

## 📋 **Recursos Disponíveis**

### **Mensagens**
- Enviar Texto, Imagem, Vídeo, Áudio
- **Enviar Documento** (com campo MimeType)
- Enviar Enquete, Contato, Lista, Botões
- Enviar PIX, Status, Reações

### **Instâncias**
- Criar, Conectar, Gerenciar instâncias
- Configurar Proxy, Presença, Comportamentos

### **Grupos**
- Gerenciar grupos, participantes, configurações
- Links de convite e mensagens temporárias

### **Chat**
- Verificar números, gerenciar mensagens
- Controle de arquivamento e status

### **Integrações**
- Chatwoot, Typebot, Dify, Flowise
- Webhooks e RabbitMQ

## 🔧 **Requisitos**

- **N8N**: Versão 1.54.4 ou superior
- **Evolution API**: Versão 2.2.0 ou superior
- **Node.js**: 18.10 ou superior

## 📖 **Como Usar**

1. **Instale o pacote** usando um dos comandos acima
2. **Reinicie o N8N** para carregar os novos nodes
3. **Configure as credenciais** da Evolution API
4. **Use os nodes** em seus workflows

## 🆕 **Exemplo: Enviar Documento com MimeType**

```json
{
  "instanceName": "minha-instancia",
  "remoteJid": "5511999999999@s.whatsapp.net",
  "media": "https://exemplo.com/documento.pdf",
  "mimetype": "application/pdf",
  "fileName": "documento.pdf",
  "caption": "Aqui está o documento solicitado"
}
```

## 🤝 **Contribuição**

Contribuições são bem-vindas! 

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 🙏 **Agradecimentos**

- **OrionDesign** pelo projeto original
- **Comunidade N8N** pelo suporte contínuo
- **Todos os contribuidores** que ajudaram a melhorar este projeto

## 📞 **Suporte**

- **Issues**: [GitHub Issues](https://github.com/Klimp3l/n8n-nodes-evolution-api/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Klimp3l/n8n-nodes-evolution-api/discussions)

---

**Desenvolvido com ❤️ por [Klimp3l](https://github.com/Klimp3l)**

*Fork do projeto original [n8n-nodes-evolution-api](https://github.com/oriondesign2015/n8n-nodes-evolution-api)*
