# Arquitectura Limpia en NestJS

Este proyecto sigue los principios de Arquitectura Limpia (Clean Architecture) con la siguiente estructura:

## Capas

### 1. Dominio (domain)
- Entidades: Representan los objetos de negocio
- Repositorios (interfaces): Definen contratos para acceder a datos
- Casos de uso (interfaces): Definen la lógica de negocio

### 2. Aplicación (application)
- Casos de uso (implementaciones): Implementan la lógica de negocio
- DTOs: Objetos para transferencia de datos

### 3. Infraestructura (infrastructure)
- Repositorios (implementaciones): Implementan el acceso a datos
- Configuraciones: Configuración de bases de datos, etc.

### 4. Presentación (presentation)
- Controladores: Manejan las solicitudes HTTP
- Middlewares: Procesan las solicitudes antes de llegar a los controladores

