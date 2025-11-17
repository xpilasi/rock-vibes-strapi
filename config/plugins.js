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
  }
});
