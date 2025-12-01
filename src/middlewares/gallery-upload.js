// Middleware para organizar las subidas de archivos en directorios
module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Interceptar solicitudes de upload
    if (ctx.request.url.includes('/upload') && ctx.request.method === 'POST') {
      // Verificar si el referer indica que viene de gallery-images
      const referer = ctx.request.headers.referer || '';

      if (referer.includes('/content-manager/collection-types/api::gallery-image.gallery-image')) {
        // Guardar el directorio original
        const originalDirectory = strapi.config.get('plugin.upload.providerOptions.directory');

        // Cambiar el directorio a 'gallery' para esta subida
        strapi.config.set('plugin.upload.providerOptions.directory', 'gallery');

        await next();

        // Restaurar el directorio original
        strapi.config.set('plugin.upload.providerOptions.directory', originalDirectory);
      } else {
        await next();
      }
    } else {
      await next();
    }
  };
};
