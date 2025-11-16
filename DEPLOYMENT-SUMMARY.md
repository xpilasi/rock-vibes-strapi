# 🚀 Rock Vibes Strapi - Resumen del Setup

## ✅ Completado

### 1. Proyecto Strapi Configurado
- ✅ Strapi 5.31.0 instalado
- ✅ Estructura de proyecto creada
- ✅ SQLite configurado para desarrollo local
- ✅ PostgreSQL/Supabase configurado para producción
- ✅ Variables de entorno configuradas
- ✅ Strapi corriendo en http://localhost:1337/admin

### 2. Base de Datos
- ✅ Proyecto Supabase creado: `rock-vibes-cms`
- ✅ PostgreSQL configurado
- ✅ Credenciales guardadas en `.env.example`

### 3. Git y GitHub
- ✅ Repositorio inicializado
- ✅ Código subido a: https://github.com/xpilasi/rock-vibes-strapi
- ✅ Rama principal: `main`

### 4. MCP Configurado
- ✅ Render MCP activo
- ✅ Strapi MCP configurado (local)
- ✅ API Token generado para Strapi

---

## 📋 Siguiente Paso: Deploy en Render

### Prerequisito
Render requiere información de pago (no te cobrarán en plan free):
1. Ve a: https://dashboard.render.com/billing
2. Añade una tarjeta de crédito/débito
3. Vuelve aquí

### Opción A: Deploy Manual (Recomendado para primera vez)

1. **Ir al Dashboard de Render:** https://dashboard.render.com

2. **Click en "New +" → "Web Service"**

3. **Conectar GitHub:**
   - Selecciona el repositorio: `rock-vibes-strapi`
   - Branch: `main`

4. **Configurar el servicio:**
   ```
   Name: rock-vibes-strapi
   Region: Frankfurt
   Branch: main
   Runtime: Node
   Build Command: npm install && npm run build
   Start Command: npm run start
   Plan: Free
   ```

5. **Añadir Variables de Entorno** (copiar de abajo):

```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=10000
APP_KEYS=ukGd387kOKMg/bW4a5GTMQ==,micI9NS44eLDxKoBJ7kxBA==
API_TOKEN_SALT=A2jfX3KrLbvuTdOyyNLOYA==
ADMIN_JWT_SECRET=qr9yTG0X5N4p+8KVIZUgdA==
TRANSFER_TOKEN_SALT=BB3Jp9RcQjIEkl7y9ytkcg==
JWT_SECRET=A/piHqBVwM8Qf5wdB9zXgA==
DATABASE_CLIENT=postgres
DATABASE_HOST=db.jyhwshghybizzluurnqe.supabase.co
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=rock-vibes-cms-181122
DATABASE_SSL=false
SUPABASE_URL=https://jyhwshghybizzluurnqe.supabase.co
SUPABASE_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aHdzaGdoeWJpenpsdXVybnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNTgzMDksImV4cCI6MjA3ODgzNDMwOX0.xyJq0EnV7KrkVQDObYOJgWBCsL1h5xIpDx6nb2pFQOo
SUPABASE_BUCKET=strapi-uploads
```

6. **Click en "Create Web Service"**

7. **Esperar el deploy** (5-10 minutos primera vez)

8. **Acceder al admin:**
   - URL será algo como: `https://rock-vibes-strapi.onrender.com/admin`
   - Crear primer usuario administrador

### Opción B: Deploy Automático con MCP (Una vez tengas tarjeta en Render)

Una vez hayas añadido la tarjeta, puedes pedirme:

```
"Crea el servicio web en Render para rock-vibes-strapi"
```

Y lo haré automáticamente con el MCP.

---

## 🔧 Configuración Post-Deploy

### 1. Crear bucket en Supabase Storage

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard/project/jyhwshghybizzluurnqe
2. **Storage** → **Create bucket**
3. **Name:** `strapi-uploads`
4. **Public bucket:** ✅ Yes
5. **Create bucket**

### 2. Configurar políticas de acceso

En el bucket `strapi-uploads`, añade estas políticas:

```sql
-- Permitir lectura pública
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'strapi-uploads');

-- Permitir escritura autenticada (desde Strapi)
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'strapi-uploads');
```

### 3. Configurar plugin de Supabase Storage en Strapi

Una vez desplegado en Render:

1. SSH al servicio o modificar código
2. Instalar plugin:
   ```bash
   npm install @strapi-community/strapi-provider-upload-supabase
   ```

3. Crear `/config/plugins.js`:
   ```javascript
   module.exports = ({ env }) => ({
     upload: {
       config: {
         provider: '@strapi-community/strapi-provider-upload-supabase',
         providerOptions: {
           apiUrl: env('SUPABASE_URL'),
           apiKey: env('SUPABASE_API_KEY'),
           bucket: env('SUPABASE_BUCKET'),
           directory: '',
         },
       },
     },
   });
   ```

4. Commit y push para redeployar

### 4. Actualizar MCP de Strapi para producción

Una vez el servicio esté desplegado, actualizar `.claude/mcp_settings.json`:

```json
{
  "mcpServers": {
    "render": { ... },
    "strapi": {
      "command": "npx",
      "args": ["-y", "strapi-mcp-server"],
      "env": {
        "STRAPI_URL": "https://rock-vibes-strapi.onrender.com",
        "STRAPI_API_TOKEN": "TU_TOKEN_DE_PRODUCCION"
      }
    }
  }
}
```

---

## 📊 URLs Importantes

| Servicio | URL | Propósito |
|----------|-----|-----------|
| **Strapi Local** | http://localhost:1337/admin | Desarrollo local |
| **Strapi Prod** | https://rock-vibes-strapi.onrender.com/admin | Producción (cuando se despliegue) |
| **Supabase Dashboard** | https://supabase.com/dashboard/project/jyhwshghybizzluurnqe | Gestión DB y Storage |
| **GitHub Repo** | https://github.com/xpilasi/rock-vibes-strapi | Código fuente |
| **Render Dashboard** | https://dashboard.render.com | Gestión hosting |

---

## 🎯 Próximos Pasos (Fase 2)

Una vez Strapi esté desplegado:

1. ✅ Crear Content Types en Strapi:
   - News
   - Gallery Images
   - Climbing Services
   - Offerings
   - Services

2. ✅ Habilitar i18n (Español/Inglés)

3. ✅ Configurar permisos públicos para API

4. ✅ Migrar contenido actual del frontend

5. ✅ Integrar frontend Vue con Strapi API

6. ✅ Testing

---

## 💡 Comandos Útiles

### Desarrollo Local
```bash
cd /Users/macbook/Desktop/proyectos/rock-vibes/rock-vibes-strapi
npm run develop   # Arrancar en modo desarrollo
npm run build     # Build para producción
npm run start     # Arrancar en producción
```

### Git
```bash
git status
git add .
git commit -m "mensaje"
git push
```

### Generar nuevas claves secretas
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
```

---

## ⚠️ Notas Importantes

1. **SQLite vs PostgreSQL:**
   - Local: SQLite (más fácil)
   - Producción: PostgreSQL (Supabase)
   - **No son compatibles**: contenido local NO se sincroniza con producción

2. **API Tokens:**
   - Local: Token diferente
   - Producción: Token diferente
   - Actualizar MCP cuando cambies entre local/prod

3. **Cold Start en Render Free:**
   - Primera carga puede tardar 30-60s
   - Se duerme después de 15min inactividad
   - Upgrade a Starter ($7/mes) para evitarlo

---

## 📞 Soporte

Si encuentras problemas:

1. Revisar logs en Render Dashboard
2. Verificar variables de entorno
3. Consultar: https://docs.strapi.io
4. Consultar: https://render.com/docs/deploy-strapi

---

**Última actualización:** 16 Noviembre 2025
**Estado:** Listo para deploy en Render (requiere añadir tarjeta)
