# Rock Vibes Strapi Backend

CMS backend para el sitio web de Rock Vibes climbing center.

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Supabase

# Iniciar en modo desarrollo
npm run develop
```

El panel de administración estará disponible en: http://localhost:1337/admin

### Producción

```bash
# Build
npm run build

# Start
npm start
```

## 🗄️ Base de Datos

Este proyecto utiliza PostgreSQL a través de Supabase.

### Variables de Entorno Requeridas

```bash
DATABASE_URL=postgresql://postgres.[ref]:[password]@[host]:6543/postgres
SUPABASE_URL=https://[project-ref].supabase.co
SUPABASE_API_KEY=your-anon-key
```

## 📝 Content Types

- **News**: Noticias del gimnasio
- **Gallery Images**: Imágenes de la galería
- **Climbing Services**: Servicios de escalada
- **Offerings**: Ofertas y membresías
- **Services**: Servicios adicionales

Todos los content types soportan internacionalización (EN/ES).

## 🔐 Seguridad

Las siguientes variables deben ser únicas y secretas:

- `APP_KEYS`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`

Puedes generarlas con:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 📚 Documentación

- [Strapi Documentation](https://docs.strapi.io)
- [Render Deployment Guide](https://render.com/docs/deploy-strapi)
