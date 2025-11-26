module.exports = ({ env }) => ({
  mcp: {
    enabled: true,
    config: {
      // Sesión en memoria para desarrollo
      session: {
        type: 'memory'
      },
      // Solo permitir conexiones desde localhost (seguridad)
      allowedIPs: ['127.0.0.1', '::1']
    }
  },
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase-bucket',
      providerOptions: {
        apiUrl: env('SUPABASE_URL'),
        apiKey: env('SUPABASE_API_KEY'),
        bucket: env('SUPABASE_BUCKET', 'strapi-uploads'),
        directory: '',
        options: {}
      }
    }
  }
});
